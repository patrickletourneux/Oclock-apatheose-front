import {
  Stack,
  Divider,
  Box,
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Box
      sx={{
        height: '50px',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        bottom: '0px',
        width: '100%',
        position: 'absolute',

      }}
      bgcolor="primary.main"
    >
      <Stack
        direction="row"
        spacing={1}
        divider={(
          <Divider
            orientation="vertical"
            flexItem
            color="secondary.light"
          />
        )}
      >
        <Link
          underline="hover"
          to="/mentions-legales"
          style={{ textDecoration: 'none', color: 'white' }}
        >Mentions légales
        </Link>
        <Link
          underline="hover"
          to="/contact"
          style={{ textDecoration: 'none', color: 'white' }}
        >Contact
        </Link>
      </Stack>
    </Box>

  );
}
