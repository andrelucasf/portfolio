import { Typography } from "@mui/material";
import "./../../App.css";
import { FaAws, FaDocker, FaGit, FaNode, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { PiFileSql } from "react-icons/pi";
import { SiNestjs } from "react-icons/si";
import "./skills.css";

function Skills() {
  return (
    <div className="skills">
      <Typography height="auto" fontWeight="600" fontSize={40} lineHeight={1.2}>
        SKILLS
      </Typography>
      <div className="skills-logos">
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
      </div>
    </div>
  );
}

export default Skills;
