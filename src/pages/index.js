import React from "react"
import Grid from '@mui/material/Grid';
import User from "./components/User/User";
import { Box } from "@mui/material";
import user from '../images/user.png'
import './styles.css'

export default function Portfolio() {
  return (
    <Box sx={{
      backgroundColor: '#121212',
    }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={5}>
          <User
            username="André Lucas"
            avatar={user}
            excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
        </Grid>
        <Grid item xs={6} md={7}>
        </Grid>
      </Grid>
    </Box>
  )
}