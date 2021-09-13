import React from "react";
import styled from "styled-components";

const Main: React.FC = () => {
  return (
    <Container>
      This is <span>Main Component</span>.
    </Container>
  );
};

const Container = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.ftBlack};

  & > span {
    font-weight: 700;
  }
`;

export default Main;
