import styled from "styled-components";
import { BsX } from "react-icons/bs";

export const StyledDivApp = styled.div`
  height: 700px;
  width: 700px;
  border: 1px solid black;
`;

export const StyledDivHeader = styled.div`
  height: 80px;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledTextArea = styled.textarea`
  height: 80%;
  border: none;
  outline: none;
  resize: none;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  font-size: 16px;
  font-family: Segoe UI;
`;

export const StyledFooter = styled.div`
  height: 50px;
`;

export const StyledXIcon = styled(BsX)`
  font-size: 42px;
  color: #539bf5;
  cursor: pointer;
`;

export const StyledButtonTweet = styled.button`
  background: #539bf5;
  color: #fff;
  border-radius: 30px;
  border: none;
  font-size: 18px;
  outline: none;
  width: 94px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
