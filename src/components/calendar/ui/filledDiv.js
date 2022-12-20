import styled from "@emotion/styled";

const StyledDiv = styled.div`
  position: absolute;
  width: 300px;
  height: ${({el}) => el.endTime - el.startTime}px;
  border: 1px solid black;
  box-sizing: border-box;
  top: ${({el}) => el.startTime}px;
  background-color: #61dafb;
`

export const FilledDiv = ({el}) => {
    return (
       <StyledDiv el = {el}/>
    );
};
