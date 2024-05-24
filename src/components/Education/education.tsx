import { Box, Typography } from "@mui/material";
import "./../../App.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkTime from "../WorkTime/workTime";
import {
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  Timeline,
} from "@mui/lab";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import { isMobile } from "react-device-detect";

const laranja = "#fdead2";

function Education() {
  console.log(timelineItemClasses.root);

  return (
    <Box padding={8} sx={{ background: laranja }} height="auto">
      <Typography
        height="auto"
        fontWeight="600"
        fontSize={40}
        lineHeight={1.2}
        marginBottom={2}
      >
        EDUCATION
      </Typography>
      <Timeline
        position={isMobile ? "right" : "left"}
        sx={{
          ...(isMobile && {
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }),
        }}
      >
        <TimelineItem>
          <TimelineSeparator sx={{ height: "auto" }}>
            <TimelineDot sx={{ height: "auto", background: "black" }}>
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector sx={{ background: "#000000" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <WorkTime dateStart={"Mar 2015"} dateEnd={"July 2023"} />
            <Typography fontWeight="600" fontSize={25} marginTop={1}>
              University of Brasília
            </Typography>
            <Typography
              fontWeight="400"
              fontSize={16}
              marginTop={1.5}
              color="#434547"
            >
              Bachelor of Software Engineering
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      {/* </Box> */}
    </Box>
  );
}

export default Education;
