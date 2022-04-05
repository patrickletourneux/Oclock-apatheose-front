/* eslint-disable no-console */
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  ButtonGroup,
  Button,
  Breadcrumbs,
  Link,
  Stack,
} from '@mui/material';

// function handleClick(event) {
//   event.preventDefault();
//   console.log('You clicked a breadcrumb.');
// }

export default function Header() {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="secondary"
      href="/"
      onClick={() => console.log('accueil')}
    >
      Accueil
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="secondary"
      href="/inscription"
      onClick={() => console.log('inscription')}
    >
      Inscription
    </Link>,
    <Typography
      color="primary"
      key="3"
    >
      Page d'Inscription
    </Typography>,
  ];
  return (
    <>
      <AppBar
        sx={{
          width: 450,
        }}
        color="primary"
        position="fixed"
      >
        <Toolbar>
          <Typography
            variant="h1"
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
                href="/inscription"
              >
                S'inscrire
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
      <Stack spacing={2}>
        <Breadcrumbs
          separator="›"
          aria-label="breadcrumb"
          style={{
            marginTop: 10,
            marginLeft: 10,
          }}
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
    </>
  );
}
