import { MutationFunction } from "@tanstack/react-query";
import axios, { AxiosInstance, AxiosResponse } from "axios";

export class Todo {
  constructor(
    public title: string,
    public content: string,
    public isDone: boolean
  ) {}
}

export const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:4000",
});

export const fetchTodos = async (): Promise<Todo[]> => {
  const { data }: AxiosResponse<Todo[]> = await api.get("/todolist");
  return data;
};

export const addTodos: MutationFunction<Todo, Todo> = async (
  newTodo: Todo
): Promise<Todo> => {
  const { data } = await api.post("/todolist", newTodo);
  return data;
};
