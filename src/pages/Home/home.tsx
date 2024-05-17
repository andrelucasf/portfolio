import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import About from "../../components/About/about";
import Experience from "../../components/Experience/experience";
import Skills from "../../components/Skills/skills";

function Home() {
  return (
    <Grid container>
      <Grid xs={4} padding={6}>
        <About />
      </Grid>

      <Grid xs={8} overflow="scroll">
        <Skills />
        <Experience />
      </Grid>
    </Grid>
  );
}

export default Home;
