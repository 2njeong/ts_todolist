import { FormEvent } from "react";
import { useAddTodo, useInput } from "../customhook";
import { Todo } from "../api";

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
    <form onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}>
      <div>
        <p>제목</p>
        <input value={title} onChange={titleHandler}></input>
      </div>
      <div>
        <p>내용</p>
        <input value={content} onChange={contentHandler}></input>
      </div>

      <button onClick={addHandler}>추가하기</button>
    </form>
  );
};

export default MakeTodo;
