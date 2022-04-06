/* eslint-disable no-console */
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  ButtonGroup,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';

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
            <Button>
              <Link
                to="/inscription"
                style={{ textDecoration: 'none', color: 'white' }}
              >S'inscrire
              </Link>
            </Button>
            <Button>
              <Link
                to="/connexion"
                style={{ textDecoration: 'none', color: 'white' }}
              >S'inscrire
              </Link>
            </Button>
          </ButtonGroup>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
