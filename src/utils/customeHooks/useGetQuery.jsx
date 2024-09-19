import { useQuery } from "@tanstack/react-query";
import { getAllItems, getCustomersOrders } from "../DATA-BASE/DATA-BASE-api";

const useGetQuery = () => {
  //todo get product list
  const { data: desserts = [], isLoading } = useQuery({
    queryKey: ["Product-list"],
    queryFn: getAllItems,
  });
  //todo get customers orders
  const { data: customersOrders = [], fetchStatus: isDeleting } = useQuery({
    queryKey: ["Customers-Order"],
    queryFn: getCustomersOrders,
  });

  return { customersOrders, isDeleting, desserts, isLoading };
};

export default useGetQuery;
