import {
  createContext,
  useState,
  useMemo,
} from 'react';
import { PropTypes } from 'prop-types';

import { removeJwt, setJwt } from '../utils/jwt';

const authContext = createContext();

export function AuthProvider({ children }) {
  const [authed, setAuthed] = useState(false);
  const [user, setUser] = useState(null);
  // TODO check/decode JWT token

  const login = (authData) => {
    setAuthed(true);
    setUser(authData.user);
    setJwt(authData.token);
  };

  const logout = () => {
    setAuthed(false);
    setUser(null);
    removeJwt();
  };

  // TODO test performance difference without memo
  const auth = useMemo(() => ({
    authed,
    user,
    login,
    logout,
  }), [authed, user]);

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};

AuthProvider.defaultProps = {
  children: '',
};

export default authContext;
