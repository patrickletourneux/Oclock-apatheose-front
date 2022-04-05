import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import authContext from '../../contexts/authContext';

export default function RequireAuth({ children }) {
  const { authed } = useContext(authContext);
  const location = useLocation();

  // TODO use navigation state in login component to redirect to the previous page once connected
  return authed === true
    ? children
    : <Navigate to="/connexion" replace state={{ path: location.pathname }} />;
}

RequireAuth.propTypes = {
  children: PropTypes.node,
};

RequireAuth.defaultProps = {
  children: '',
};
