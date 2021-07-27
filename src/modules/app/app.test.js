import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "jest-styled-components";

import App from "./index";
import {
  CHARACTERS_LIMITATION,
  STRING_BELOW_40_CHAR,
  LENGTH_OF_STRING_BELOW_40_CHAR,
  STRING_40_TO_50_CHAR,
  LENGTH_OF_STRING_40_TO_50_CHAR,
  STRING_BEYONG_50_CHAR,
  LENGTH_OF_STRING_BEYONG_50_CHAR,
  WORD_COUNTER_COLOR,
} from "./contants";

it("snapshot testing", () => {
  const { asFragment } = render(<App />);
  expect(asFragment(<App />)).toMatchSnapshot();
});

it("test word-counter when it is below 40", () => {
  const { getByTestId } = render(<App />);
  fireEvent.change(getByTestId(/textarea/g), {
    target: { value: STRING_BELOW_40_CHAR },
  });
  expect(getByTestId(/charCounter/g)).toHaveTextContent(
    CHARACTERS_LIMITATION - LENGTH_OF_STRING_BELOW_40_CHAR
  );
});

it("test word-counter when it is below 40", () => {
  const { getByTestId } = render(<App />);
  fireEvent.change(getByTestId(/textarea/g), {
    target: { value: STRING_BELOW_40_CHAR },
  });
  expect(getByTestId(/charCounter/g)).toHaveTextContent(
    CHARACTERS_LIMITATION - LENGTH_OF_STRING_BELOW_40_CHAR
  );
  expect(getByTestId(/charCounter/g)).toHaveStyleRule(
    "color",
    WORD_COUNTER_COLOR.BLUE
  );
});

it("test word-counter when it is between 40 and 50", () => {
  const { getByTestId } = render(<App />);
  fireEvent.change(getByTestId(/textarea/g), {
    target: { value: STRING_40_TO_50_CHAR },
  });
  expect(getByTestId(/charCounter/g)).toHaveTextContent(
    CHARACTERS_LIMITATION - LENGTH_OF_STRING_40_TO_50_CHAR
  );
  expect(getByTestId(/charCounter/g)).toHaveStyleRule(
    "color",
    WORD_COUNTER_COLOR.YELLOW
  );
});

it("test word-counter when it is below 40", () => {
  const { getByTestId } = render(<App />);
  fireEvent.change(getByTestId(/textarea/g), {
    target: { value: STRING_BEYONG_50_CHAR },
  });
  expect(getByTestId(/charCounter/g)).toHaveTextContent(
    CHARACTERS_LIMITATION - LENGTH_OF_STRING_BEYONG_50_CHAR
  );
  expect(getByTestId(/charCounter/g)).toHaveStyleRule(
    "color",
    WORD_COUNTER_COLOR.RED
  );
});
