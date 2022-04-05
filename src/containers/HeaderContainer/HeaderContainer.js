import { useContext } from 'react';
import HeaderLogged from '../../components/HeaderLogged';
import Header from '../../components/Header';

import authContext from '../../contexts/authContext';

export default function HeaderContainer() {
  const { authed } = useContext(authContext);

  return authed === false
    ? <HeaderLogged />
    : <Header />;
}
