import {
  Typography, Grid, Button, Box, Avatar,
} from '@mui/material';

function LeaderboardPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
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
        <Typography
          variant="h1"
          textAlign="center"
          padding="10px"
          color="primary"
        >
          Classement
        </Typography>

        <Typography
          variant="h3"
          textAlign="center"
          padding="10px"
          color="secondary"
        >
          il vous reste [nb de jours concours] afin de tenter le [titre reward]
        </Typography>

        <Grid
          sx={{
            margin: '20px',
          }}
        />
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
      </Box>

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
          <Typography variant="h1" color="primary" textAlign="center">
            Reward
          </Typography>
        </Grid>
        <Box sx={{ typography: 'h2' }} textAlign="center" padding="20px">
          [Nom du Reward]
        </Box>
        <Box
          typography="h3"
          color="secondary"
          margin="20px"
          textAlign="center"
          sx={{ border: '1px solid grey', padding: '12px' }}
        >
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </Box>
        <Box
          sx={{
            textAlign: 'center',
            margin: '40px',
          }}
        >
          <Button type="Submit" variant="contained" size="small">
            Modifier
          </Button>
        </Box>
      </Grid>
    </Box>
  );
}

export default LeaderboardPage;
