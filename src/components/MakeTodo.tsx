import { ChangeEvent, useState } from "react";
import { useAddTodo } from "../customhook";
import { Todo } from "../api";

const MakeTodo = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const { mutate: mutateToAdd } = useAddTodo();

  const titleHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const contentHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const newTodo = new Todo(title, content, false);

  const addHandler = () => {
    mutateToAdd(newTodo);
  };

  return (
    <>
      <div>
        <p>제목</p>
        <input value={title} onChange={titleHandler}></input>
      </div>
      <div>
        <p>내용</p>
        <input value={content} onChange={contentHandler}></input>
      </div>

      <button onClick={addHandler}>추가하기</button>
    </>
  );
};

export default MakeTodo;
