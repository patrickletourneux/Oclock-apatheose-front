import {
  Stack,
  Divider,
  Box,
  Link,
} from '@mui/material';
import { Link as LinkRouter } from 'react-router-dom';

export default function Footer() {
  return (
    <Box
      sx={{
        height: '70px',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        background: 'linear-gradient(90deg, #21C2CF, #49D7BB)',
      }}
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
          to="/mentions-legales"
          component={LinkRouter}
          variant="body1"
          style={{ textDecoration: 'none', color: 'white' }}
        >Mentions légales
        </Link>
        <Link
          to="/contact"
          component={LinkRouter}
          variant="body1"
          style={{ textDecoration: 'none', color: 'white' }}
        >Contact
        </Link>
      </Stack>
    </Box>

  );
}
