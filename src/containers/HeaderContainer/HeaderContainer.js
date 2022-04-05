import { useContext } from 'react';
import LoginPage from '../../components/LoginPage';

import authContext from '../../contexts/authContext';

export default function HeaderContainer() {
  const { authed } = useContext(authContext);

  return authed === true
    ? <LoginPage />
    : <LoginPage />;
}
