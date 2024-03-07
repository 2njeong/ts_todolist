import { ReactNode } from "react";
import { useAppSelector } from "../reduxHooks";

const Working = (): ReactNode => {
  const todolist = useAppSelector((state) => state.todolistSlice);
  console.log(todolist);

  return (
    <>
      <h1>Working</h1>
      {todolist?.map((todo, idx) => (
        <div key={idx}>{todo.title}</div>
      ))}
    </>
  );
};

export default Working;
