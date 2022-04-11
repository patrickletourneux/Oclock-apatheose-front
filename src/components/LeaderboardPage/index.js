import {
  TextField,
  Typography,
  Grid,
  Button,
  FormGroup,
  FormControlLabel,
  Box,
  Avatar,
} from '@mui/material';
import { margin, typography } from '@mui/system';

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
            margin: '20px',
          }}
        >
          <Typography variant="h2" color="primary">
            Classement
          </Typography>
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            typography: 'h3',
            padding: '10px',
          }}
        >
          <Grid>#1</Grid>
          <Avatar sx={{ width: 30, height: 30 }}>img Avatar</Avatar>
          <Grid>Pseudo</Grid>
          <Grid>501 points</Grid>
        </Grid>

        <Grid
          sx={{
            borderBottom: 0.5,
            borderColor: '#009688',
            borderStyle: 'dotted',
            margin: '20px 5px',
          }}
        />
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            typography: 'body1',
            padding: '10px',
          }}
        >
          <Grid>#4</Grid>
          <Avatar sx={{ width: 24, height: 24 }}>img Avatar</Avatar>
          <Grid>Pseudo</Grid>
          <Grid>501 points</Grid>
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            typography: 'body1',
            padding: '10px',
          }}
        >
          <Grid>#5</Grid>
          <Avatar sx={{ width: 24, height: 24 }}>img Avatar</Avatar>
          <Grid>Pseudo</Grid>
          <Grid>501 points</Grid>
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            typography: 'body1',
            padding: '10px',
          }}
        >
          <Grid>#6</Grid>
          <Avatar sx={{ width: 24, height: 24 }}>img Avatar</Avatar>
          <Grid>Pseudo</Grid>
          <Grid>501 points</Grid>
        </Grid>
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
            margin: '20px',
          }}
        >
          <Typography variant="h2" color="primary">
            Reward
          </Typography>
        </Grid>
        <Box />

      </Grid>
    </Box>
  );
}

export default LeaderboardPage;
