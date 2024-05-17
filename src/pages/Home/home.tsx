import { Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import About from "../About/about";

function Home() {
  return (
    <Grid container>
      <Grid xs={4} padding={6}>
        <About />
      </Grid>

      <Grid xs={8} overflow="scroll">
        <Paper
          style={{
            height: "100%",
            overflowY: "auto",
            padding: "20px",
            background: "#00fefe",
            maxHeight: "300px",
          }}
        >
          <h2>Parte Rolável</h2>
        </Paper>
        <Paper
          style={{
            height: "100%",
            overflowY: "auto",
            padding: "20px",
            background: "#aaffa7",
          }}
        >
          <h2>Parte Rolável</h2>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Home;
