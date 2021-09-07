import styled from "styled-components";
import { green, blue, white } from "../../../variables/colors";

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  width: 100%;
  margin-bottom: 7%;
`;

const Name = styled.h1`
  color: ${blue};
  font-size: 1.5em;
`;
const Open = styled.h1`
  color: ${green};
  font-size: 1.25em;
  margin-bottom: 0.25em;
  font-weight: normal;
`;
const Point = styled.div`
  color: #ececec;
  font-size: 1.2em;
  font-weight: bold;
  margin: 2px 0;
  color: ${white};
`;

const Image = styled.img`
  height: 7em;
`;
const Info = styled.div`
  text-align: left;
`;
const Role = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Tech = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
  margin-left: 1.5em;
`;
export { Point, Open, Name, Root, Image, Info, Role, Tech };
