import { Box, Typography } from "@mui/material";
import "./../../App.css";
import { FaAws, FaDocker, FaGit, FaNode, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { PiFileSql } from "react-icons/pi";
import { SiNestjs } from "react-icons/si";

const blue = "#00fefefe";

function Skills() {
  return (
    <Box padding={8} sx={{ background: blue }} height="auto">
      <Typography height="auto" fontWeight="600" fontSize={40} lineHeight={1.2}>
        SKILLS
      </Typography>
      <Box display="flex" flexDirection="row" gap={4} padding={2}>
        <FaNode size={100} />
        <RiJavascriptFill size={80} />
        <BiLogoTypescript size={80} />
        <FaReact size={80} />
        <SiNestjs size={80} />
        <PiFileSql size={80} />
        <BiLogoPostgresql size={80} />
        <FaDocker size={80} />
        <FaAws size={80} />
        <FaGit size={80} />
      </Box>
    </Box>
  );
}

export default Skills;
