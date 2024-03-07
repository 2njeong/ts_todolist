import styled from "styled-components";
import Todolist from "./Todolist";

const Working = () => {
  return (
    <WorkingDiv>
      <h2>Working</h2>
      <Todolist isDone={false} />
    </WorkingDiv>
  );
};

export default Working;

const WorkingDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: #343945;
`;
