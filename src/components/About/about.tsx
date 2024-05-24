import { Avatar, Box, Link, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { GitHub, WhatsApp } from "@mui/icons-material";
import "./../../App.css";
import andre from "../../assets/img/andre.png";

function About() {
  return (
    <Box
      gap={2}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      padding={6}
      // height="100%"
    >
      <Avatar alt="André Lucas" src={andre} sx={{ width: 200, height: 200 }} />
      <Typography height="auto" fontWeight="600" fontSize={45} lineHeight={1.2}>
        HI, I'M <br /> <span className="background-grey">ANDRÉ LUCAS</span>
      </Typography>
      <Typography fontSize={16} height="auto" color="#7a8085">
        Software Engineer, based in Brazil, with more than 4 years of
        experience. My specialization covers technologies such as Javascript,
        Typescript, Node.js and React. I value code quality and prioritize
        techniques to provide robust solutions, highlighting the practices of
        TDD, SOLID, clean code and design patterns.
      </Typography>
      <Box gap={2} display="flex" height="auto">
        <Link
          href="https://www.linkedin.com/in/andrelucasf/"
          sx={{ cursor: "pointer" }}
        >
          <LinkedInIcon
            href="https://www.linkedin.com/in/andrelucasf/"
            color="primary"
            sx={{ fontSize: 45 }}
          />
        </Link>
        <Link href="https://github.com/andrelucasf" sx={{ cursor: "pointer" }}>
          <GitHub sx={{ fontSize: 45, color: "black" }} />
        </Link>
        <Link href="https://wa.me/+5561984226680" sx={{ cursor: "pointer" }}>
          <WhatsApp sx={{ fontSize: 45, color: "#25d366" }} />
        </Link>
      </Box>
    </Box>
  );
}

export default About;
