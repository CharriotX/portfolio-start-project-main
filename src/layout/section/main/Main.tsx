import React from "react";
import styled from "styled-components";
import photo from "../../../accets/images/main.jpg";
import { FlexContainer } from "../../../components/flexContainer/FlexContainer";
import { Photo } from "../../../components/photo/Photo";

export const Main = () => {
  return (
    <StyledMain>
      <FlexContainer justify="space-around">
        <div>
          <span>Hello, I’m</span>
          <MainTitle>Fabio Scaletta</MainTitle>
          <span>
            I’m a UX/UI designer and Front End Developer based in Kuala Lumpur,
            Malaysia! 🇲🇾. I love designing, coding, creating and building stuff.{" "}
          </span>
        </div>
        <Photo src={photo}></Photo>
      </FlexContainer>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 529px;
  background-color: rgba(15, 191, 97, 0.1);
`;

const MainTitle = styled.h2`
    
`

