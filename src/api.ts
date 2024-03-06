import axios, { AxiosInstance, AxiosResponse } from "axios";

export class Todo {
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public isDone: boolean
  ) {}
}

export const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:4000",
});

export const getTodos = async (): Promise<Todo[]> => {
  const { data }: AxiosResponse<Todo[]> = await api.get("/todolist");
  return data;
};
