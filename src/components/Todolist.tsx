import styled from "styled-components";
import { Todo } from "../queryFns";
import { useDeleteTodo, useEditTodo } from "../customhook";
import { useAppSelector } from "../reduxHooks";

const Todolist = ({ isDone }: { isDone: boolean }) => {
  const todolist = useAppSelector((state) => state.todolistSlice);
  const showingList = todolist.filter((todo) => todo.isDone === isDone);
  const { mutate: mutateToEdit } = useEditTodo();
  const { mutate: mutateToDelete } = useDeleteTodo();

  const doneClickHandler = (todo: Todo) => {
    mutateToEdit(todo);
  };

  const deleteClickHandler = (todo: Todo) => {
    if (window.confirm("할일을 삭제하시겠습니까?")) {
      mutateToDelete(todo);
    }
  };

  return (
    <TodolistDiv>
      {showingList?.map((todo) => (
        <div key={todo.id}>
          <div>
            <div>
              <p>{todo.title}</p>
            </div>
            <div>
              <p>{todo.content}</p>
            </div>
          </div>
          <div>
            <button onClick={() => doneClickHandler(todo)}>
              {todo.isDone ? "취소" : "완료"}
            </button>
            <button onClick={() => deleteClickHandler(todo)}>삭제</button>
          </div>
        </div>
      ))}
    </TodolistDiv>
  );
};

export default Todolist;

const TodolistDiv = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: row;

  & > div {
    height: 220px;
    width: 220px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 8px;
    border: solid 3px lightgray;
    background-color: #fffbc5;

    & div:nth-child(1) {
      // 글자부
      height: 150px;
      padding: 10px 5px;
      display: flex;
      gap: 10px;
      flex-direction: column;
      & div:nth-child(1) {
        height: 30px;
        > p {
          font-weight: 550;
          font-size: 20px;
        }
      }
      & div:nth-child(2) {
        height: 75px;
        padding: 10px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
    }

    & div:nth-child(2) {
      // 버튼부
      height: 40px;
      display: flex;
      justify-content: center;
      gap: 10px;
      > button {
        width: 90px;
        height: 35px;
        border-radius: 3px;
        border: none;
        &:hover {
          background-color: lightgray;
        }
      }
    }
  }
`;
