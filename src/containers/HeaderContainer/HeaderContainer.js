import { useContext } from 'react';

import authContext from '../../contexts/authContext';

export default function HeaderContainer() {
  const { authed } = useContext(authContext);

  return authed === true
    ? <p>Header connecté</p>
    : <p>Header NON connecté</p>;
}
