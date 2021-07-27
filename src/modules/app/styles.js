import styled from "styled-components";
import {
  BsX,
  BsImage,
  BsJustifyLeft,
  BsGeoAlt,
  BsPlusCircleFill,
} from "react-icons/bs";
import { AiOutlineFileGif } from "react-icons/ai";

export const StyledDivApp = styled.div`
  height: 700px;
  width: 700px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

export const StyledDivHeader = styled.div`
  height: 80px;
  padding: 25px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledTextArea = styled.textarea`
  max-height: 80%;
  border: none;
  outline: none;
  resize: none;
  width: 100%;
  padding: 25px;
  box-sizing: border-box;
  font-size: 16px;
  font-family: Segoe UI;
  flex-grow: 2;
`;

export const StyledFooter = styled.div`
  height: 57px;
  border-top: 1px solid #ccc;
  display: flex;
  align-items: center;
  padding: 0px 25px;
  justify-content: space-between;
`;

export const StyledXIcon = styled(BsX)`
  font-size: 42px;
  color: rgba(29, 161, 242, 1);
  cursor: pointer;
`;

export const StyledButtonTweet = styled.button`
  background: rgba(29, 161, 242, 1);
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

export const StyledDivMedia = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledBsImage = styled(BsImage)`
  font-size: 30px;
  color: rgba(29, 161, 242, 1);
  cursor: pointer;
`;

export const StyledAiOutLineFileGif = styled(AiOutlineFileGif)`
  font-size: 30px;
  color: rgba(29, 161, 242, 1);
  cursor: pointer;
`;

export const StyledBsJustifyLeft = styled(BsJustifyLeft)`
  font-size: 30px;
  color: rgba(29, 161, 242, 1);
  cursor: pointer;
`;

export const StyledBsGeoAlt = styled(BsGeoAlt)`
  font-size: 30px;
  color: rgba(29, 161, 242, 1);
  cursor: pointer;
`;

export const StyledDivMessageAdd = styled.div`
  min-width: 77px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledBsPlusCircleFill = styled(BsPlusCircleFill)`
  font-size: 30px;
  color: rgba(29, 161, 242, 1);
  cursor: pointer;
`;

export const StyledSpanWordCount = styled.span`
  border-radius: 1.5rem;
  border: 2px solid ${(props) => props.color || "rgba(29, 161, 242, 1)"};
  color: ${(props) => props.color || "rgba(29, 161, 242, 1)"};
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  height: 1em;
`;
export const StyledVerticleDivider = styled.div`
  width: 0px;
  border-left: 1px solid #ccc;
  content: "";
  height: 20px;
  margin: 0px 10px;
`;
