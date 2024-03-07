import Todolist from "./Todolist";

const Working = () => {
  return (
    <>
      <h2>Working</h2>
      <Todolist isDone={false} />
    </>
  );
};

export default Working;
