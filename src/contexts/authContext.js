import {
  createContext,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import { removeJwt, setJwt } from '../utils/jwt';

const authContext = createContext();

export function AuthProvider({ children }) {
  const [authed, setAuthed] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (authData) => {
    setAuthed(true);
    setUser(authData.user);
    setJwt(authData.token);
    navigate('tableau-de-bord');
  };

  const logout = () => {
    setAuthed(false);
    setUser(null);
    removeJwt();
  };

  // TODO test performance difference without memo
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
