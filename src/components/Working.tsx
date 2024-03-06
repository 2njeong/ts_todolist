import { ReactNode, Suspense } from "react";
import { useGetTodolist } from "../customhook";

const Working = (): ReactNode => {
  const { data: todolist } = useGetTodolist();

  return (
    <Suspense fallback={<div>로딩중..</div>}>
      {todolist?.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </Suspense>
  );
};

export default Working;
