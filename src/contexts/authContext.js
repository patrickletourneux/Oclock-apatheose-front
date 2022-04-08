import {
  createContext,
  useState,
  useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import {
  getJwt,
  removeJwt,
  setJwt,
  verifyDecodeJwt,
} from '../utils/jwt';
import { getUser } from '../apis/api/users';

const authContext = createContext();

export function AuthProvider({ children }) {
  const [authed, setAuthed] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = ({ id, pseudonym, avatar_img }, token = '') => {
    setAuthed(true);
    setUser({ id, pseudonym, avatar_img });
    if (token) {
      setJwt(token);
    }
    navigate('tableau-de-bord');
  };

  const logout = () => {
    setAuthed(false);
    setUser(null);
    removeJwt();
  };
  // check jwt token on mount and every minute. login/logout the user if needed
  useEffect(() => {
    const checkCurrentJwt = () => {
      const jwt = getJwt();

      const onVerifySuccess = async (claims) => {
        if (authed === false) {
          await getUser(
            claims.user.id,
            login,
            console.error,
          );
        }
      };

      verifyDecodeJwt(
        jwt,
        onVerifySuccess,
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
    user,
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
