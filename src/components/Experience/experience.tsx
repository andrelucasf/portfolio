import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import { FaGear, FaRegMoneyBill1, FaShirt } from "react-icons/fa6";
import WorkTime from "../WorkTime/workTime";
import "./../../App.css";
import experiencesJson from "../../assets/experiences.json";
import "./experience.css";
import { isMobile } from "react-device-detect";

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
    setExperiences(experiencesJson);
  }, []);

  return (
    <div className="experience">
      <Typography
        height="auto"
        fontWeight="600"
        fontSize={40}
        lineHeight={1.2}
        variant="h2"
      >
        EXPERIENCE
      </Typography>
      <Timeline
        position={isMobile ? "right" : "alternate"}
        sx={{
          ...(isMobile && {
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }),
        }}
        className="time-line"
      >
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
              <Typography
                fontWeight="600"
                fontSize={25}
                marginTop={1}
                className="time-line-typography"
              >
                {exp.company}
              </Typography>
              <Typography
                fontWeight="500"
                fontSize={16}
                className="time-line-typography"
              >
                {exp.role}
              </Typography>
              <Typography
                fontWeight="400"
                fontSize={16}
                marginTop={1.5}
                color="#434547"
                className="time-line-typography"
              >
                {exp.description}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}

export default Experience;
