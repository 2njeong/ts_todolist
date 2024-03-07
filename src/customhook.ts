import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { Todo, addTodos, fetchTodos } from "./api";

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
