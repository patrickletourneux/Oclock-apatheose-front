import {
  Stack,
  Divider,
  Link,
  Box,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Footer() {
  return (
    <Box
      sx={{
        height: '50px',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',

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
          color="secondary.light"
        >
          <RouterLink
            to="/mentions-legales"
            style={{ textDecoration: 'none', color: 'white' }}
          >Mentions légales
          </RouterLink>
        </Link>
        <Link
          underline="hover"
          color="secondary.light"
        >
          <RouterLink
            to="/contact"
            style={{ textDecoration: 'none', color: 'white' }}
          >Contact
          </RouterLink>
        </Link>
      </Stack>
    </Box>

  );
}
