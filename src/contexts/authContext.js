import {
  createContext,
  useState,
  useEffect,
} from 'react';
import { PropTypes } from 'prop-types';
import {
  getJwt,
  removeJwt,
  setJwt,
  verifyDecodeJwt,
} from '../utils/jwt';
import { setupAuthInterceptors } from '../apis/api/axiosInstance';

const authContext = createContext();

export function AuthProvider({ children }) {
  // null is used for auth to detect that it is not initialized yet
  const [authed, setAuthed] = useState(null);
  const [userId, setUserId] = useState(null);

  const login = (newUserId, token = '') => {
    setAuthed(true);
    setUserId(newUserId);
    if (token) {
      setJwt(token);
    }
  };

  const logout = () => {
    setAuthed(false);
    setUserId(null);
    removeJwt();
  };

  // On component mount, setup auth interceptors. Remove them on component unmount
  useEffect(() => setupAuthInterceptors(logout), []);

  // check jwt token on mount and every minute. login/logout the user if needed
  useEffect(() => {
    const checkCurrentJwt = () => {
      const jwt = getJwt();
      verifyDecodeJwt(
        jwt,
        (claims) => login(claims.id),
        logout,
      );
    };

    checkCurrentJwt();
    const intervalId = setInterval(checkCurrentJwt, 1000 * 60);

    return (() => {
      clearInterval(intervalId);
    });
  // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, []);

  // TODO test performance difference without memo
  // It will fix the eslint error below
  // const auth = useMemo(() => ({
  //   authed,
  //   user,
  //   login,
  //   logout,
  // }), [authed, user]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const auth = {
    authed,
    userId,
    login,
    logout,
  };

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};

AuthProvider.defaultProps = {
  children: '',
};

export default authContext;
