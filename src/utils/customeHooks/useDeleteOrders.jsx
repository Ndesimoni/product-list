import { useMutation, useQueryClient } from "@tanstack/react-query";
import { delateCustomersOrders } from "../DATA-BASE/DATA-BASE-api";
import toast from "react-hot-toast";

const useDeleteOrders = () => {
  const queryClient = useQueryClient();

  //todo delete customers orders
  const { mutate, fetchStatus: isDeleting } = useMutation({
    mutationFn: delateCustomersOrders,
    onSuccess: () => {
      toast.success("Deleted one item");
      queryClient.invalidateQueries({
        queryKey: ["Customers-Order"],
      });
    },

    onError: (error) => {
      toast.error("Error count not deleted");
      throw new Error(error.message);
    },
  });
  return { mutate, isDeleting };
};

export default useDeleteOrders;
