import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";

export function useDeleteBooking() {
  //   const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => deleteBookingApi(id),
    onSuccess: () => {
      toast.success(`Booing succesfully deleted`);
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
      // navigate("/");
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteBooking, isDeleting };
}
