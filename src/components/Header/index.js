/* eslint-disable no-console */
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  ButtonGroup,
  Button,
} from '@mui/material';

export default function Header() {
  return (
    <AppBar
      position="static"
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="h1"
          href="/"
          sx={{
            flexGrow: 1,
            color: 'white',
          }}
        >
          C du Prop's
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <ButtonGroup
            size="small"
            variant="contained"
            orientation="horizontal"
            sx={{
              color: 'white',
              border: 1,
            }}
          >
            <Button
              component="Link"
              to="/inscription"
            >S'inscrire
            </Button>
            <Button
              href="/connexion"
            >
              Se connecter
            </Button>
          </ButtonGroup>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
