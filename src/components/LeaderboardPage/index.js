import {
  TextField,
  Typography,
  Grid,
  Button,
  FormGroup,
  FormControlLabel,
  Box,
} from '@mui/material';
import { typography } from '@mui/system';

function LeaderboardPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        bgcolor: '#f3f7f6',
      }}
    >
      <Box
        xs={8}
        sx={{
          bgcolor: 'white',
          border: 1,
          borderColor: '#009688',
          margin: '20px 20px',
          padding: '10px',
          boxShadow:
            'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        }}
      >
        <Typography variant="h1">Classement</Typography>
      </Box>

      <Grid
        item
        columns={16}
        sx={{
          bgcolor: 'white',
          border: 1,
          borderColor: '#009688',
          margin: '20px 20px',
          padding: '10px',
          boxShadow:
            'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        }}
      >
        <Typography variant="body1">
          il vous reste [nb de jours concours] afin de tenter le [titre reward]
        </Typography>
      </Grid>

      <Grid
        sx={{
          bgcolor: 'white',
          border: 1,
          borderColor: '#009688',
          margin: '20px',
          padding: '10px',
          boxShadow:
            'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
          alignContent: 'space-between',
        }}
      >
        <Grid
          sx={{
            margin: '10px',
          }}
        >
          <Typography variant="h3" color="primary">Classement</Typography>
        </Grid>
        <Grid sx={{ display: 'flex', justifyContent: 'space-between', typography: 'body1' }}>
          <Grid>#1</Grid>
          <Grid>img Avatar</Grid>
          <Grid>Pseudo</Grid>
          <Grid>501 points</Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LeaderboardPage;
