/* eslint-disable no-console */
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  ButtonGroup,
  Button,
  Link,
  // Breadcrumbs,
  // Link,
  // Stack,
} from '@mui/material';

// function handleClick(event) {
//   event.preventDefault();
//   console.log('You clicked a breadcrumb.');
// }

export default function Header() {
  // const breadcrumbs = [
  //   <Link
  //     underline="hover"
  //     key="1"
  //     color="secondary"
  //     href="/"
  //     onClick={() => console.log('accueil')}
  //   >
  //     Accueil
  //   </Link>,
  //   <Link
  //     underline="hover"
  //     key="2"
  //     color="secondary"
  //     href="/inscription"
  //     onClick={() => console.log('inscription')}
  //   >
  //     Inscription
  //   </Link>,
  //   <Typography
  //     color="primary"
  //     key="3"
  //   >
  //     Page d'Inscription
  //   </Typography>,
  // ];
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

            {/* <Button
              component={              <Link to="/inscription">Contactez-nous</Link>}
}
              // href="/inscription"
            >
            </Button> */}
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
    /* <Stack spacing={2}>
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
    </Stack> */
  );
}
