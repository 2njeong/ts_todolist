import { Todo } from "../api";
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
    <>
      {showingList?.map((todo) => (
        <div key={todo.id}>
          <div>
            <h4>{todo.title}</h4>
            <p>{todo.content}</p>
          </div>
          <div>
            <button onClick={() => doneClickHandler(todo)}>
              {todo.isDone ? "취소" : "완료"}
            </button>
            <button onClick={() => deleteClickHandler(todo)}>삭제</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Todolist;
