import React, { useState } from "react";

import { useWordCounterColor } from "./hooks";
import { CHARACTERS_LIMITATION } from "./contants";
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
  // const [message, handleInputDebounceChange] = useDebounce("");
  const [message, setMessage] = useState("");
  const wordCounterColor = useWordCounterColor(message);

  const handleChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    // handleInputDebounceChange(value);
    setMessage(value);
  };

  return (
    <StyledDivApp>
      <StyledDivHeader>
        <StyledXIcon />
        <StyledButtonTweet>Tweet</StyledButtonTweet>
      </StyledDivHeader>
      <StyledTextArea
        data-testid="textarea"
        placeholder="Type something here please !!"
        onChange={handleChange}
      ></StyledTextArea>
      <StyledFooter>
        <StyledDivMedia>
          <StyledBsImage />
          <StyledAiOutLineFileGif />
          <StyledBsJustifyLeft />
          <StyledBsGeoAlt />
        </StyledDivMedia>
        <StyledDivMessageAdd>
          <StyledSpanWordCount
            data-testid="charCounter"
            title="remaining characters"
            color={wordCounterColor}
          >
            {CHARACTERS_LIMITATION - message.length}
          </StyledSpanWordCount>{" "}
          <StyledVerticleDivider />
          <StyledBsPlusCircleFill />
        </StyledDivMessageAdd>
      </StyledFooter>
    </StyledDivApp>
  );
};

export default App;
