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
import { getUser } from '../apis/api/users';

const authContext = createContext();

export function AuthProvider({ children }) {
  // null is used for auth to detect that it is not initialized yet
  const [authed, setAuthed] = useState(null);
  const [userData, setUserData] = useState(null);

  const login = (userId, token = '') => {
    setAuthed(true);
    if (token) {
      setJwt(token);
    }
    getUser(
      userId,
      (data) => setUserData(data),
      (error) => console.error(error),
    );
  };

  const logout = () => {
    setAuthed(false);
    setUserData(null);
    removeJwt();
  };

  // On component mount, setup auth interceptors. Remove them on component unmount
  useEffect(() => setupAuthInterceptors(logout), []);

  // check jwt token on mount. login/logout the user if needed
  useEffect(() => {
    const checkCurrentJwt = () => {
      const jwt = getJwt();
      verifyDecodeJwt(
        jwt,
        (claims) => login(claims.user.id),
        logout,
      );
    };

    checkCurrentJwt();
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
    userData,
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
