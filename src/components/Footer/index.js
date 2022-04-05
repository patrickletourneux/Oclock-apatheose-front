import {
  Stack,
  Divider,
  Link,
  Box,
} from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        width: '450px',
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
          href="/mentions-légales"
          underline="hover"
          color="secondary.light"

        >
          Mentions légales
        </Link>
        <Link
          href="/contact"
          underline="hover"
          color="secondary.light"
        >
          Contact
        </Link>
      </Stack>
    </Box>

  );
}
