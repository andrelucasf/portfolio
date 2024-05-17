import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import About from "../../components/About/about";
import Experience from "../../components/Experience/experience";

function Home() {
  return (
    <Grid container>
      <Grid xs={4} padding={6}>
        <About />
      </Grid>

      <Grid xs={8} overflow="scroll">
        <Experience />
      </Grid>
    </Grid>
  );
}

export default Home;
