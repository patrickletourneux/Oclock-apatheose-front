import { useContext, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import CloseIcon from '@mui/icons-material/Close';

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
    <AppBar position="static" sx={{ height: '70px', background: 'linear-gradient(90deg, #21C2CF, #49D7BB)', justifyContent: 'center' }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleClick}
          backgroundColor="#333"
        >
          <MenuIcon color="secondary.light" />
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
            fontSize: { xs: '14px', md: '20px' },
          }}
        >
          <Link
            to="/"
            component={LinkRouter}
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <CleaningServicesIcon />C du Prop's
          </Link>
        </Typography>
        <Typography
          variant="h6"
          component="h1"
          sx={{
            // flexGrow: 1,
            textAlign: 'center',
            fontSize: { xs: '14px', md: '20px' },
            paddingTop: { xs: '10px', md: '0px' },
            paddingRight: { xs: '10px', md: '10px' },
          }}
        >
          <Link
            to="/mon-compte"
            component={LinkRouter}
            style={{
              textDecoration: 'none',
              color: 'white',
            }}
          >
            Mon Compte
          </Link>
        </Typography>
        <IconButton
          aria-label="close"
          size="small"
          onClick={handleClickLogout}
          sx={{
            color: 'white',
            border: 2,
            borderColor: 'white',
            position: 'relative',
            bgcolor: 'grey',
            '&:hover': {
              backgroundColor: 'white',
              color: 'black',
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
