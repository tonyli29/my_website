import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";
import resume from "../../resume/Tony_Li_resume.pdf";

import { Icon, IconBox, Point, Open, Name, Greet, Root } from "./styles";

const Intro = () => (
  <Root id="top">
    <Greet>Hi I'm</Greet>
    <Name>Tony Li,</Name>
    <Open>I am a....</Open>
    <Point>Software Engineer with 3 years of experience</Point>
    <Point>React/Next.js enthusiast</Point>
    <Point style={{ marginBottom: "1em" }}>
      Avid Learner always looking to build my development skills
    </Point>
    <Open>Currently looking for...</Open>
    <Point>Full time positions in Software Development/Engineering</Point>
    <IconBox>
      <Icon>
        <a
          href="https://www.linkedin.com/in/tony-li-2b9745165/"
          target="_blank"
        >
          <FaLinkedin size="3em" />
        </a>
      </Icon>
      <Icon>
        <a href="https://github.com/tonyli29" target="_blank">
          <FaGithub size="3em" />
        </a>
      </Icon>
      <Icon>
        <a href="mailto: litony1999c@gmail.com" target="_blank">
          <FaEnvelope size="3em" />
        </a>
      </Icon>
      <Icon>
        <a href={resume} download="Tony_Li_resume">
          <IoDocument size="3em" />
        </a>
      </Icon>
    </IconBox>
  </Root>
);

export default Intro;
