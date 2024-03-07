import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { Todo, addTodos, changeDoneTodo, deleteTodo, fetchTodos } from "./api";
import { ChangeEvent, useState } from "react";

export const useGetTodolist = (): {
  isLoading: boolean;
  isError: boolean;
  data: Todo[] | undefined;
} => {
  const {
    isLoading,
    isError,
    data: todos,
  } = useSuspenseQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  return { isLoading, isError, data: todos };
};

export const useInput = (): [
  string,
  (e: ChangeEvent<HTMLInputElement>) => void,
  () => void
] => {
  const [value, setValue] = useState<string>("");

  const handler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clearHandler = () => {
    setValue("");
  };
  return [value, handler, clearHandler];
};

export const useAddTodo = () => {
  const queryClient = useQueryClient();

  const { mutate: mutateToAdd } = useMutation({
    mutationFn: addTodos,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["todos"] });
      console.log("할일 추가 성공");
    },
  });
  return { mutate: mutateToAdd };
};

export const useEditTodo = () => {
  const queryClient = useQueryClient();

  const { mutate: mutateToEdit } = useMutation({
    mutationFn: changeDoneTodo,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["todos"] });
      console.log("완료상태 변경 성공");
    },
  });
  return { mutate: mutateToEdit };
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  const { mutate: mutateToDelete } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["todos"] });
      console.log("할일 삭제 성공");
    },
  });
  return { mutate: mutateToDelete };
};
