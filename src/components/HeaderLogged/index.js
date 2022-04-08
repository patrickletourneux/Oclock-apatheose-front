import { useContext, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { Link as LinkRouter } from 'react-router-dom';

import authContext from '../../contexts/authContext';

export default function HeaderLogged() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { logout } = useContext(authContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickLogout = () => {
    logout();
  };
  return (
    <AppBar
      position="static"
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleClick}
        >
          <MenuIcon
            color="secondary.light"
          />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>
            <Link
              to="/"
              component={LinkRouter}
              variant="body1"
              style={{ textDecoration: 'none', color: '#009688' }}

            >
              Accueil
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              to="/tableau-de-bord"
              component={LinkRouter}
              variant="body1"
              style={{ textDecoration: 'none', color: '#009688' }}
            >
              Tableau de bord
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              to="/mes-taches"
              component={LinkRouter}
              variant="body1"
              style={{ textDecoration: 'none', color: '#009688' }}
            >
              Mes taĉhes
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              to="/classement"
              component={LinkRouter}
              variant="body1"
              style={{ textDecoration: 'none', color: '#009688' }}
            >
              Classement
            </Link>
          </MenuItem>
        </Menu>
        <Typography
          variant="h6"
          component="h1"
          sx={{
            flexGrow: 1,
            textAlign: 'center',
          }}
        >
          <Link
            to="/"
            component={LinkRouter}
            style={{ textDecoration: 'none', color: 'white' }}
          >C du Prop's
          </Link>
        </Typography>
        <Button
          sx={{
            color: 'white',
            border: 1,
          }}
          variant="outlined"
          size="small"
          color="secondary"
          onClick={handleClickLogout}
        >
          Déconnexion
        </Button>
      </Toolbar>
    </AppBar>
  );
}
