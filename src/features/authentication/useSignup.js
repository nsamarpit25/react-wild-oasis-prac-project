import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
 const { mutate: signup, isLoading } = useMutation({
  mutationFn: signupApi,
  onSuccess: (user) => {
   console.log(user);
   toast.success(
    "Account succesfully created! Please verify the new account from the user's email addrss."
   );
  },
  onError: (err) => {
   //  console.log("ERROR", err);
   toast.error(err.message);
  },
 });

 return { isLoading, signup };
}
