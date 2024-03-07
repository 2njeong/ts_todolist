import Done from "./components/Done";
import Working from "./components/Working";
import { useGetTodolist } from "./customhook";
import { ReactNode, Suspense, useEffect } from "react";
import { getTodolist } from "./reduxStore/modules/todolistSlice";
import { useAppDispatch } from "./reduxHooks";
import MakeTodo from "./components/MakeTodo";

function App(): ReactNode {
  const dispatch = useAppDispatch();
  const { data: todolist } = useGetTodolist();

  useEffect(() => {
    if (todolist) {
      dispatch(getTodolist(todolist));
    }
  }, [dispatch, todolist]);

  return (
    <>
      <Suspense fallback={<div>로딩중..</div>}>
        <MakeTodo />
        <Working />
        <Done />
      </Suspense>
    </>
  );
}

export default App;
