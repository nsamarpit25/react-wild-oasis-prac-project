import { useQuery } from "@tanstack/react-query";
import { getCurrUser } from "../../services/apiAuth";

export function useUser() {
  const {
    isLoading,
    data: user,
    error,
  } = useQuery({
    queryFn: getCurrUser,
    queryKey: ["user"],
  });

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
