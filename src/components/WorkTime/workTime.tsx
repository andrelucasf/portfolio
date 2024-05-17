import React from "react";
import "./../../App.css";
import "./workTime.css";

interface WorkTimeProps {
  dateStart: string;
  dateEnd: string;
}

const WorkTime: React.FC<WorkTimeProps> = ({ dateStart, dateEnd }) => {
  return (
    <span className="work-time">
      {dateStart} - {dateEnd}
    </span>
  );
};

export default WorkTime;
