import { useContext } from 'react';
import Header from '../../components/Header';
// import Login from '../../components/Login';

import authContext from '../../contexts/authContext';

export default function HeaderContainer() {
  const { authed } = useContext(authContext);

  return authed === true
    ? <Header />
    : <Header />;
  // ? <Login />
  // : <Login />;
}
