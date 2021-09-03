import styled from "styled-components";
import { green, blue, white } from "../../../variables/colors";

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  margin-bottom: 30%;
`;
const Greet = styled.h1`
  color: ${green};
  font-size: 1.75em;
  font-weight: normal;
`;
const Name = styled.h1`
  color: ${blue};
  font-size: 2em;
`;
const Open = styled.h1`
  color: ${green};
  font-size: 1.5em;
  margin-bottom: 0.25em;
  font-weight: normal;
`;
const Point = styled.div`
  color: #ececec;
  font-size: 1.25em;
  font-weight: bold;
  margin: 2px 0;
  color: ${white};
`;
const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  margin-top: 2em;
`;
const Icon = styled.div`
  color: ${white};
  &:hover {
    color: ${blue};
  }
  size: 3em;
`;
const ToolTip = styled.div`
  color: ${white};
  font-size: 1.25em;
  font-weight: bold;
  margin-left: 2em;
`;

export { Icon, IconBox, Point, Open, Name, Greet, Root, ToolTip };
