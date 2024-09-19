import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { updateOrderQuantity } from "../DATA-BASE/DATA-BASE-api";
import toast from "react-hot-toast";

const useCardQuantity = () => {
  const [itemQuantity, setItemQuantity] = useState(1);
  const queryClient = useQueryClient();
  //todo: this updates the order quantity
  const { data = [], mutate: updateQuantity } = useMutation({
    mutationFn: updateOrderQuantity,
    onSuccess: () => {
      toast.success("added and item to cart");

      queryClient.invalidateQueries({
        queryKey: ["Customers-Order"],
      });
    },
  });
  return { itemQuantity, setItemQuantity, updateQuantity, data };
};

export default useCardQuantity;
