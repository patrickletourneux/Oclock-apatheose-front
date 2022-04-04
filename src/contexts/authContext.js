import {
  createContext,
  useState,
  useMemo,
} from 'react';
import { PropTypes } from 'prop-types';

const authContext = createContext();

export function AuthProvider({ children }) {
  const [authed, setAuthed] = useState(false);
  // TODO check/decode JWT token

  const login = () => {
    setAuthed(true);
  };

  const logout = () => {
    setAuthed(false);
  };

  // TODO test performance difference without memo
  const auth = useMemo(() => ({ authed, login, logout }), [authed]);

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};

AuthProvider.defaultProps = {
  children: '',
};

export default authContext;
