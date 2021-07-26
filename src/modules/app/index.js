import React from "react";

import {
  StyledXIcon,
  StyledDivApp,
  StyledDivHeader,
  StyledTextArea,
  StyledButtonTweet,
} from "./styles";

const App = () => {
  return (
    <StyledDivApp>
      <StyledDivHeader>
        <StyledXIcon />
        <StyledButtonTweet>Tweet</StyledButtonTweet>
      </StyledDivHeader>
      <StyledTextArea placeholder="Remember, be nice!"></StyledTextArea>
    </StyledDivApp>
  );
};

export default App;
