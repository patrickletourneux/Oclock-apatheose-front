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
    <AppBar sx={{ mx: "auto", width: 450 }}
      color="primary"
      position="fixed"
    >
      <Toolbar 
      >
        <IconButton
          sx={{ color: 'white' }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            color: 'white',
          }}
        >
          C du Prop's
        </Typography>
        <Button
          sx={{
            color: 'white',
          }}
          variant="outlined"
          href="#"
          size="small"
        >
          Déconnexion
        </Button>
      </Toolbar>
    </AppBar>
  );
}
