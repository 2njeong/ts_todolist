import Todolist from "./Todolist";

const Done = () => {
  return (
    <>
      <h2>Done</h2>
      <Todolist isDone={true} />
    </>
  );
};

export default Done;
