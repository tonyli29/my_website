import React from "react";
import { Point, Open, Name, Root, Image, Info, Role, Tech } from "./styles";

const Project = (props) => {
  const techStack = props.tech;
  return (
    <Root>
      <Image src={props.logo} />

      <Info>
        <Name>{props.company}</Name>
        <Role>
          <Open>{props.title}</Open>
          <Point>{props.time}</Point>
        </Role>
        <Point>{props.disc}</Point>
        <Tech>
          {techStack.map((t, tId) => {
            return <Point>{t}</Point>;
          })}
        </Tech>
      </Info>
    </Root>
  );
};

export default Project;
