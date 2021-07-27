import React from "react";

import {
  StyledXIcon,
  StyledDivApp,
  StyledDivHeader,
  StyledTextArea,
  StyledButtonTweet,
  StyledFooter,
  StyledBsImage,
  StyledAiOutLineFileGif,
  StyledBsJustifyLeft,
  StyledDivMedia,
  StyledBsGeoAlt,
  StyledDivMessageAdd,
  StyledBsPlusCircleFill,
  StyledSpanWordCount,
  StyledVerticleDivider,
} from "./styles";

const App = () => {
  return (
    <StyledDivApp>
      <StyledDivHeader>
        <StyledXIcon />
        <StyledButtonTweet>Tweet</StyledButtonTweet>
      </StyledDivHeader>
      <StyledTextArea placeholder="Type something here please !!"></StyledTextArea>
      <StyledFooter>
        <StyledDivMedia>
          <StyledBsImage />
          <StyledAiOutLineFileGif />
          <StyledBsJustifyLeft />
          <StyledBsGeoAlt />
        </StyledDivMedia>
        <StyledDivMessageAdd>
          <StyledSpanWordCount title="remaining characters">
            -150
          </StyledSpanWordCount>{" "}
          <StyledVerticleDivider />
          <StyledBsPlusCircleFill />
        </StyledDivMessageAdd>
      </StyledFooter>
    </StyledDivApp>
  );
};

export default App;
