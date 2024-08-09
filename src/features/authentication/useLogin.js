import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data.user)
      // queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/dashboard", { replace: true });
      // console.log(data);
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or passsword is wrong");
    },
  });

  return { login, isLoading };
}
