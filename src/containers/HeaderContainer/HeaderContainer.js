import { useContext } from 'react';
import HeaderLogged from '../../components/HeaderLogged';
// import Login from '../../components/Login';

import authContext from '../../contexts/authContext';

export default function HeaderContainer() {
  const { authed } = useContext(authContext);

  return authed === true
    ? <HeaderLogged />
    : <HeaderLogged />;
  // ? <Login />
  // : <Login />;
}
