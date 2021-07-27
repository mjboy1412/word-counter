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
      <StyledTextArea data-testid="textarea" placeholder="Type something here please !!"></StyledTextArea>
      <StyledFooter>
        <StyledDivMedia>
          <StyledBsImage />
          <StyledAiOutLineFileGif />
          <StyledBsJustifyLeft />
          <StyledBsGeoAlt />
        </StyledDivMedia>
        <StyledDivMessageAdd>
          <StyledSpanWordCount data-testid="charCounter" title="remaining characters">
            -11
          </StyledSpanWordCount>{" "}
          <StyledVerticleDivider />
          <StyledBsPlusCircleFill />
        </StyledDivMessageAdd>
      </StyledFooter>
    </StyledDivApp>
  );
};

export default App;
