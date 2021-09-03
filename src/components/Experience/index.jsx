import React, { useState, useEffect } from "react";
import { Icon, IconBox, Point, Open, Name, Greet, Root } from "./styles";
import Project from "./Project";
import RBC from "../../img/rbc.png";
import seed from "../../img/seedwell.png";
import innova from "../../img/innova.png";

const Experience = () => {
  const [jobs, setJobs] = useState([
    {
      company: "Royal Bank of Canada",
      title: "Software Engineer",
      logo: RBC,
      time: "Augest 2021 - Present",
      disc: "Working with the Data protection and User Behavioural Anaylsis team to build tools to identify and track fradulent behaviour within the company",
    },
    {
      company: "Innovapost",
      title: "Software Developer",
      logo: innova,
      time: "May 2021 - Augest 2021",
      disc: "Working with the Data protection and User Behavioural Anaylsis team to build tools to identify and track fradulent behaviour within the company",
    },
  ]);
  return (
    <Root>
      <Open>Experience</Open>
      {jobs.map((job, jobId) => {
        return (
          <Project
            company={job.company}
            title={job.title}
            disc={job.disc}
            logo={job.logo}
            time={job.time}
          />
        );
      })}
    </Root>
  );
};

export default Experience;
