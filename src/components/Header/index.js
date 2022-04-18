import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  ButtonGroup,
  Button,
  Link,
} from '@mui/material';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import { Link as LinkRouter } from 'react-router-dom';

export default function Header() {
  return (
    <AppBar position="static" sx={{ height: '70px' }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="h1"
          href="/"
          sx={{
            flexGrow: 1,
            color: 'white',
            padding: '20px',
          }}
        >
          <Link
            to="/"
            component={LinkRouter}
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <CleaningServicesIcon /> C du Prop's
          </Link>
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
              margin: '10px',
            }}
          >
            <Button>
              <Link
                to="/inscription"
                component={LinkRouter}
                style={{ textDecoration: 'none', color: 'white' }}
              >
                S'inscrire
              </Link>
            </Button>
            <Button>
              <Link
                to="/connexion"
                component={LinkRouter}
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Se connecter
              </Link>
            </Button>
          </ButtonGroup>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
