import { useMutation } from "react-query";
import { axiosInstance } from "../services/axiosTokenInstance";

const usePost = (url, queryKey) => {

  const { mutate, isLoading, error, mutateAsync } = useMutation(
    queryKey,
    async (data) => {
      const result = await axiosInstance({
        method: "post",
        url: url,
        data: data,
      });
      return result;
    },
    {
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return { mutate, isLoading, error, mutateAsync };
};

export default usePost;
