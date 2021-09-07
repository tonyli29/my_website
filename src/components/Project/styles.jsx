import styled from "styled-components";
import { green, blue, white } from "../../variables/colors";

const Root = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
`;
const Open = styled.h1`
  color: ${green};
  font-size: 1.5em;
  margin-bottom: 0.25em;
  font-weight: normal;
`;
const Point = styled.div`
  color: #ececec;
  font-size: 1.5em;
  font-weight: bold;
  margin: 2px 0;
  color: ${white};
`;

export { Point, Open, Root };
