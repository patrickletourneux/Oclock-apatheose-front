import { Box } from '@mui/material';

// eslint-disable-next-line react/prop-types
function RewardTile({ title, description }) {
  return (
    <>
      <Box
        sx={{
          typography: 'body1',
        }}
        textAlign="center"
        padding="10px"
        margin="30px 0px"
      >
        {title}
      </Box>

      <Box
        typography="body1"
        color="secondary"
        margin="20px auto"
        textAlign="center"
        maxWidth="600px"
        sx={{ border: '1px solid grey', padding: '20px', borderRadius: 2 }}
      >
        <p>{description}</p>
      </Box>
    </>
  );
}

export default RewardTile;
