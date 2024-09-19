import { useMutation, useQueryClient } from "@tanstack/react-query";
import { delateAllCustomersOrders } from "../DATA-BASE/DATA-BASE-api";
import toast from "react-hot-toast";

const UseDeleteAllCustomersOrders = () => {
  const queryClient = useQueryClient();

  //todo delete customers orders
  const { mutate } = useMutation({
    mutationFn: delateAllCustomersOrders,
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
  return { mutate };
};

export default UseDeleteAllCustomersOrders;
