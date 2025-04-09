import styled from "styled-components";

export const Card = styled.div`
  background-color: ${(props) => (props.primary ? "blue" : "red")};
  color : white;
`;
