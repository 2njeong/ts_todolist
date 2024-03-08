import styled from "styled-components";
import Todolist from "./Todolist";

const Done = () => {
  return (
    <DoneDiv>
      <h2>Done</h2>
      <Todolist isDone={true} />
    </DoneDiv>
  );
};

export default Done;

const DoneDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: #343945;
`;
