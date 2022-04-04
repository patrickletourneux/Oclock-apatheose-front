/* eslint-disable no-console */
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

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
      href="/"
      onClick={() => console.log('inscription')}
    >
      Inscription
    </Link>,
    <Typography
      color="primary"
    >
      Page d'Inscription
    </Typography>,
  ];
  return (
    <>
      <Box sx={{
        width: '100%',
        maxWidth: 450,
        p: 2,
        border: '1px dashed grey',
        display: 'flex',
        justifyContent: 'space-between',
      }}
      >
        <Typography
          variant="h1"
          component="h1"
          href="#"
          sx={{
            my: 'auto',
            fontSize: 20,
          }}
          color="secondary"
        >
          C du prop's
        </Typography>
        <ButtonGroup
          size="small"
          variant="contained"
          orientation="vertical"
        >
          <Button
            color="secondary"
            size="small"
            href="#"
            sx={{ mt: 1 }}
            onClick={() => console.log('inscription')}
          >
            S'inscrire
          </Button>
          <Button
            color="secondary"
            size="small"
            href="#"
            sx={{ mt: 1 }}
            onClick={() => console.log('connexion')}
          >
            Se connecter
          </Button>
        </ButtonGroup>
      </Box>
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
