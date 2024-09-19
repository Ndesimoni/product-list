import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCustomersOrder } from "../DATA-BASE/DATA-BASE-api";
import toast from "react-hot-toast";

const useCreateNewOrder = () => {
  //todo this is for creating new orders
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: createCustomersOrder,
    onSuccess: () => {
      toast.success("order created successfully");

      queryClient.invalidateQueries({
        queryKey: ["Customers-Order"],
      });
    },

    onError: (error) => {
      toast.error("Already added this item to cart");
      throw new Error(error.message);
    },
  });
  return { mutate };
};

export default useCreateNewOrder;
