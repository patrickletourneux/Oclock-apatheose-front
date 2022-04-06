import { useContext } from 'react';
import Footer from '../../components/Footer';
// import Login from '../../components/Login';

import authContext from '../../contexts/authContext';

export default function HeaderContainer() {
  const { authed } = useContext(authContext);

  return authed === true
    ? <Footer />
    : <Footer />;
  // ? <Login />
  // : <Login />;
}
