import { useSuspenseQuery } from "@tanstack/react-query";
import { Todo, getTodos } from "./api";

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
    queryFn: getTodos,
  });
  return { isLoading, isError, data: todos };
};
