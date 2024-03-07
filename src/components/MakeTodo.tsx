import { FormEvent } from "react";
import { useAddTodo, useInput } from "../customhook";
import { Todo } from "../api";
import styled from "styled-components";

const MakeTodo = () => {
  const [title, titleHandler, clearTitle] = useInput();
  const [content, contentHandler, clearContent] = useInput();
  const { mutate: mutateToAdd } = useAddTodo();

  const newTodo = new Todo(undefined, title, content, false);

  const addHandler = () => {
    mutateToAdd(newTodo);
    clearTitle();
    clearContent();
  };

  return (
    <FormDiv>
      <MakeTodoForm
        onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}
      >
        <div>
          <span>제목</span>
          <input value={title} onChange={titleHandler} autoFocus></input>
        </div>
        <div>
          <span>내용</span>
          <input value={content} onChange={contentHandler} autoFocus></input>
        </div>

        <button onClick={addHandler}>추가하기</button>
      </MakeTodoForm>
    </FormDiv>
  );
};

export default MakeTodo;

const FormDiv = styled.div`
  margin-bottom: 30px;
`;

const MakeTodoForm = styled.form`
  display: flex;
  gap: 15px;
  height: 30px;
  display: flex;
  align-items: center;

  & span {
    margin-right: 10px;
    font-size: 20px;
    color: #767872;
    font-weight: 550;
  }

  & input {
    height: 20px;
    width: 200px;
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
    font-size: 18px;
  }

  & button {
    border: none;
    border-radius: 3px;
    height: 35px;
    width: 100px;
    font-size: 15px;
    &:hover {
      background-color: #e2e2e2;
    }
  }
`;
