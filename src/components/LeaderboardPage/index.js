import {
  TextField,
  Typography,
  Grid,
  Button,
  FormGroup,
  FormControlLabel,
  Box,
} from "@mui/material";

function LeaderboardPage() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "primary",
      }}
    >
      <Grid
        item
        xs={8}
        sx={{
          bgcolor: "white",
          border: 1,
          borderColor: "#009688",
          margin: "20px 20px",
          padding: "10px",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      >
        <Typography variant="h1">Classement</Typography>
      </Grid>

      <Grid
        item
        columns={16}
        sx={{
          bgcolor: "white",
          border: 1,
          borderColor: "#009688",
          margin: "20px 20px",
          padding: "10px",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      >
        <Typography variant="body1">
          il vous reste [nb de jours concours] afin de tenter le [titre reward]
        </Typography>
      </Grid>

      <Grid
        spacing={2}
        sx={{
          bgcolor: "white",
          border: 1,
          borderColor: "#009688",
          margin: "20px 20px",
          padding: "10px",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      >
        <Grid direction="row">
          <Typography variant="h3">Classement</Typography>
        </Grid>

        <Grid>Avatar</Grid>
        <Grid>Avatar</Grid>

      </Grid>
    </Box>
  );
}

export default LeaderboardPage;
