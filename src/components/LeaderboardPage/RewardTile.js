import { Box, Typography } from '@mui/material';

// eslint-disable-next-line react/prop-types
function RewardTile({ title, description }) {
  return (
    <>
      <Box
        sx={{
          typography: 'h2',
        }}
        textAlign="center"
        padding="10px"
        margin="30px 0px"
      >
        {title}
      </Box>

      <Box
        typography="body1"
        margin="20px auto"
        textAlign="center"
        maxWidth="600px"
      >
        <Typography
          padding="20px"
        >
          <p>{description}</p>
        </Typography>

      </Box>
    </>
  );
}

export default RewardTile;
