import React from "react";
import {
  Icon,
  IconBox,
  Point,
  Open,
  Name,
  Greet,
  Root,
  ToolTip,
} from "./styles";
import styled from "styled-components";

const Image = styled.img`
  height: 10em;
  align-self: center;
  margin: auto;
`;
const Info = styled.div`
  text-align: left;
`;
const Role = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Date = styled.h1`
  color: white;
  font-size: 1.5em;
  margin-bottom: 0.25em;
  font-weight: normal;
`;

const Project = (props) => (
  <Root>
    <Image src={props.logo} />

    <Info>
      <Name>{props.company}</Name>
      <Role>
        <Open>{props.title}</Open>
        <Date>{props.time}</Date>
      </Role>
      <Point>{props.disc}</Point>
      <Point>- {"{Python, Flask, HTML/CSS, Jinja2, SQL}"}</Point>
      {/* <ToolTip>{"\u2B24"} Back End Development - Flask</ToolTip>
      <ToolTip>{"\u2B24"} Front End Development - Jinja2, HTML/CSS</ToolTip>
      <ToolTip>{"\u2B24"} Database - Jinja2, HTML/CSS</ToolTip> */}
    </Info>
  </Root>
);

export default Project;
