import Done from "./components/Done";
import Working from "./components/Working";
import { useGetTodolist } from "./customhook";
import { ReactNode, Suspense, useEffect } from "react";
import { getTodolist } from "./reduxStore/modules/todolistSlice";
import { useAppDispatch } from "./reduxHooks";
import MakeTodo from "./components/MakeTodo";
import styled from "styled-components";

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
        <h1>ㅇㅈ이의 할 일</h1>
        <MakeTodo />
        <ListDiv>
          <Working />
          <Done />
        </ListDiv>
      </Suspense>
    </>
  );
}

export default App;

const ListDiv = styled.div`
  background-color: #eaefcc;
  padding: 10px;
  margin-top: 20px;
  border-radius: 10px;
`;
