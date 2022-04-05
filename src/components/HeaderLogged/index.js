import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function HeaderLogged() {
  return (
    <AppBar
      sx={{
        width: 450,
      }}
      color="primary"
      position="fixed"
    >
      <Toolbar>
        <IconButton
          sx={{ color: 'white' }}
        >
          <MenuIcon />
        </IconButton>
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
          href="#"
          size="small"
          color="secondary"
        >
          Déconnexion
        </Button>
      </Toolbar>
    </AppBar>
  );
}
