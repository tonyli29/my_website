import React, { useState } from "react";
import { Open, Root } from "./styles";
import Project from "./Project";
import RBC from "../../img/rbc.png";
import seed from "../../img/seedwell.png";
import innova from "../../img/innova.png";
import iCon from "../../img/iCon.png";

const Experience = () => {
  const [jobs, setJobs] = useState([
    {
      company: "Royal Bank of Canada",
      title: "Software Engineer",
      logo: RBC,
      time: "Augest 2021 - Present",
      disc: "Working with the Data protection and User Behavioural Anaylsis team to build tools to identify and track fradulent behaviour within the company",
      tech: ["Python", "Flask", "HTML/CSS", "Jinja2", "SQL", "Helios"],
    },
    {
      company: "Innovapost",
      title: "Software Developer",
      logo: innova,
      time: "May 2021 - Augest 2021",
      disc: "Worked on the Cloud Stabilization team. Developed scripts in Bash and PowerShell to retrive information from Azure VM. Also defined CI/CD pipelines and automated builds in Jenkins",
      tech: ["Python", "Jenkins", "Bash", "Powershell", "Azure"],
    },
    {
      company: "Seedwell Inc",
      title: "Full stack Developer",
      logo: seed,
      time: "Jan 2021 - May 2021",
      disc: "Implemented user stories into working features. Built out reusable componenents that would be used throughout the whole application. ",
      tech: ["Typescript", "GraphQL", "React", "HTML/CSS", "SQL", "Docker"],
    },
    {
      company: "iContribute",
      title: "Full stack Developer",
      logo: iCon,
      time: "Aug 2020 - May 2021",
      disc: "Led the development of the company website https://icontribute.community/. Built out an Nodejs backend with a MongoDB database to help the migration from firebase to MongoDB. Created API documentation for future developers and users ",
      tech: ["Typescript", "React", "HTML/CSS", "MongoDB", "Docker"],
    },
  ]);
  return (
    <Root id="experience">
      <Open>Experience</Open>
      {jobs.map((job, jobId) => {
        return (
          <Project
            company={job.company}
            title={job.title}
            disc={job.disc}
            logo={job.logo}
            time={job.time}
            tech={job.tech}
          />
        );
      })}
    </Root>
  );
};

export default Experience;
