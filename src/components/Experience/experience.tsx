import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import { FaGear, FaRegMoneyBill1, FaShirt } from "react-icons/fa6";
import WorkTime from "../WorkTime/workTime";
import "./../../App.css";

const green = "#aaffa7";
interface ExperienceData {
  dateStart: string;
  dateEnd: string;
  icon: string;
  company: string;
  role: string;
  description: string;
}

const iconMapping: { [key: string]: JSX.Element } = {
  FaGear: <FaGear />,
  FaRegMoneyBill1: <FaRegMoneyBill1 />,
  FaShirt: <FaShirt />,
};

function Experience() {
  const [experiences, setExperiences] = useState<ExperienceData[]>([]);

  useEffect(() => {
    fetch("/src/assets/experiences.json")
      .then((response) => response.json())
      .then((data) => setExperiences(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Box padding={8} sx={{ background: green }} height="auto">
      <Typography height="auto" fontWeight="600" fontSize={40} lineHeight={1.2}>
        EXPERIENCE
      </Typography>
      <Timeline position="alternate">
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator sx={{ height: "auto" }}>
              <TimelineDot sx={{ height: "auto", background: "black" }}>
                {iconMapping[exp.icon]}
              </TimelineDot>
              {index < experiences.length - 1 && (
                <TimelineConnector sx={{ background: "#000000" }} />
              )}
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <WorkTime dateStart={exp.dateStart} dateEnd={exp.dateEnd} />
              <Typography fontWeight="600" fontSize={25} marginTop={1}>
                {exp.company}
              </Typography>
              <Typography fontWeight="500" fontSize={16}>
                {exp.role}
              </Typography>
              <Typography
                fontWeight="400"
                fontSize={16}
                marginTop={1.5}
                color="#434547"
              >
                {exp.description}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}

export default Experience;
