import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  // IconButton,
  Button,
  Menu,
  MenuItem,
  Link,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function HeaderLogged() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar
      sx={{
        width: 450,
      }}
      color="primary"
      position="fixed"
    >
      <Toolbar
      >
        <div sx={{ width: 230 }}>
          <MenuIcon
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          />
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
                href="/"
                component="button"
                variant="body1"
                underline="none"
              >
                Accueil
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                href="/tableau-de-bord"
                component="button"
                variant="body1"
                underline="none"
              >
                Tableau de bord
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                href="/mes-taches"
                component="button"
                variant="body1"
                underline="none"
              >
                Mes taĉhes
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                href="/classement"
                component="button"
                variant="body1"
                underline="none"
              >
                Classement
              </Link>
            </MenuItem>
          </Menu>
        </div>
        {/* <IconButton
          sx={{ color: 'white' }}
        >
          <MenuIcon />
        </IconButton> */}
        <Typography
          sx={{
            flexGrow: 1,
            color: 'white',
          }}
          variant="h6"
        >
          C du Prop's
        </Typography>
        <Button
          sx={{
            color: 'white',
            border: 1,
          }}
          variant="outlined"
          href="/"
          size="small"
          color="secondary"
        >
          Déconnexion
        </Button>
      </Toolbar>

    </AppBar >
  );
}
