import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Header() {
  return (
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
        component="div"
        gutterBottom
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

  );
}
