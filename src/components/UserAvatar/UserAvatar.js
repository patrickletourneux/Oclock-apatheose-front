import { Avatar } from '@mui/material';
import PropTypes from 'prop-types';

function UserAvatar({ url, pseudonym, ...otherProps }) {
  if (url) {
    return (
      <Avatar
        alt={pseudonym}
        src={url}
        {...otherProps}
      />
    );
  }
  return (
    <Avatar {...otherProps}>
      {pseudonym.charAt(0).toUpperCase()}
    </Avatar>
  );
}

UserAvatar.propTypes = {
  url: PropTypes.string,
  pseudonym: PropTypes.string.isRequired,
};

UserAvatar.defaultProps = {
  url: '',
};

export default UserAvatar;
