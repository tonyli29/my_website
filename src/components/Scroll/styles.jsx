import styled from "styled-components";
import { green, blue } from "../../variables/colors";

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 2em;
}
`;
const Button = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  color: ${green};
  &:hover {
    color: ${blue};
  }
  cursor: pointer;
`;

export { Root, Button };
