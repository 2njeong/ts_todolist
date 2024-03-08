import { MutationFunction } from "@tanstack/react-query";
import axios, { AxiosInstance, AxiosResponse } from "axios";

export class Todo {
  constructor(
    public id: string,
    public title: string,
    public content: string,
    public isDone: boolean
  ) {}
}

const QUERYKEY_TODOLIST = "/todolist";

export const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:4000",
});

export const fetchTodos = async (): Promise<Todo[]> => {
  const { data }: AxiosResponse<Todo[]> = await api.get(`${QUERYKEY_TODOLIST}`);
  return data;
};

export const addTodos: MutationFunction<
  Todo,
  { title: string; content: string; isDone: boolean }
> = async (newTodo): Promise<Todo> => {
  const { data } = await api.post(QUERYKEY_TODOLIST, newTodo);
  return data;
};

export const changeDoneTodo: MutationFunction<Todo, Todo> = async (
  todo: Todo
): Promise<Todo> => {
  const changeTodo = (todo: Todo, fields: Partial<Todo>): Todo => {
    return { ...todo, ...fields };
  };
  const changedTodo = changeTodo(todo, { isDone: !todo.isDone });
  const { data } = await api.patch(
    `${QUERYKEY_TODOLIST}/${todo.id}`,
    changedTodo
  );
  return data;
};

export const deleteTodo: MutationFunction<Todo, Todo> = async (
  todo: Todo
): Promise<Todo> => {
  const { data } = await api.delete(`${QUERYKEY_TODOLIST}/${todo.id}`);
  return data;
};
