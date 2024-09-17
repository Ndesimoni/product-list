import { IoIosCloseCircleOutline } from "react-icons/io";
import { Item } from "../ui/StylesComponents/OrderListStyle";
import PropTypes from "prop-types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { delateCustomersOrders } from "../utils/DATA-BASE/DATA-BASE-api";

const Orders = ({ ordersContain }) => {
  const { name, quantity, price, id } = ordersContain;
  const queryClient = useQueryClient();

  //todo delete customers orders
  const { mutate } = useMutation({
    mutationFn: delateCustomersOrders,
    onSuccess: () => {
      alert("deleted one item"),
        queryClient.invalidateQueries({
          queryKey: ["Customers-Order"],
        });
    },

    onError: (error) => {
      alert(error.message);
    },
  });
  return (
    <div className=" rounded px-3   ">
      <Item>
        <div className="items-start flex flex-col text-xs">
          <p>{name}</p>
          <div className="text-sx flex flex-row gap-3">
            <p className="text-[var(--Red)]">{quantity}x</p>
            <p className="text-[var(--Rose-400)]">@ ${price}</p>
            <p className="text-[var(--Rose-500)]">$5.50</p>
          </div>
        </div>

        <div>
          <IoIosCloseCircleOutline
            onClick={() => mutate(id)}
            size="20px"
            color="var(--Rose-400"
          />
        </div>
      </Item>
    </div>
  );
};

Orders.propTypes = {
  ordersContain: PropTypes.any,
};

export default Orders;
