import styled from "styled-components";
import { green, blue, white } from "../../variables/colors";

const Root = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
`;

const Open = styled.h1`
  color: ${green};
  font-size: 1.5em;
  margin-bottom: 2em;
  font-weight: normal;
`;

export { Open, Root };
