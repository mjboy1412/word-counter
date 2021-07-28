import { useState, useCallback, useMemo } from "react";
import { WORD_COUNTER_COLOR, CHARACTERS_LIMITATION } from "./contants";

let timer = null;

export const useDebounce = (initalState = "", delay = 400) => {
  const [value, setValue] = useState(initalState);

  const handleInputChange = useCallback(
    (value) => {
      //clear timer if it is existing
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => setValue(value), delay);
      //clear timer when component unmounts
      return () => clearTimeout(timer);
    },
    [delay]
  );

  return [value, handleInputChange];
};

export const useWordCounterColor = (message = "") => {
  const wordCounterColor = useMemo(() => {
    if (message.length > CHARACTERS_LIMITATION) return WORD_COUNTER_COLOR.RED;
    if (
      message.length >= CHARACTERS_LIMITATION - 10 &&
      message.length < CHARACTERS_LIMITATION
    )
      return WORD_COUNTER_COLOR.YELLOW;
    return WORD_COUNTER_COLOR.BLUE;
  }, [message.length]);
  return wordCounterColor;
};
