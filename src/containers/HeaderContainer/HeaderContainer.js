import { useContext } from 'react';
import Footer from '../../components/Footer';

import authContext from '../../contexts/authContext';

export default function HeaderContainer() {
  const { authed } = useContext(authContext);

  return authed === true
    ? <Footer />
    : <Footer />;
}
