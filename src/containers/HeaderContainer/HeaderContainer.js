import { useContext } from 'react';
import HeaderLogged from '../../components/HeaderLogged';

import authContext from '../../contexts/authContext';

export default function HeaderContainer() {
  const { authed } = useContext(authContext);

  return authed === true
    ? <HeaderLogged />
    : <HeaderLogged />;
}
