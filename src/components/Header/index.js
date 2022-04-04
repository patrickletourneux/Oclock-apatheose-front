import { Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import logo from '../../assets/images/logo.jpg';

export default function Header() {
  return (
      <ButtonGroup
        size="small"
        variant="contained"
        orientation="vertical"
      >
        <Button
          color="secondary"
          size="small"
        >
          S'inscrire
        </Button>
        <Button
          color="secondary"
          size="small"
        >
          Se connecter
        </Button>
      </ButtonGroup>


  );
}
