import { IoIosCloseCircleOutline } from "react-icons/io";
import { Item } from "../ui/StylesComponents/OrderListStyle";
import PropTypes from "prop-types";
import useDeleteOrders from "../utils/customeHooks/useDeleteOrders";
// import useGetQuery from "../utils/customeHooks/useGetQuery";

const Orders = ({ ordersContain }) => {
  //   const { isDeleting } = useGetQuery();
  const { mutate } = useDeleteOrders();
  const { name, quantity, price, id } = ordersContain;
  //

  return (
    <div className=" rounded px-3   ">
      <Item>
        <div className="items-start flex flex-col text-xs">
          <p>{name}</p>
          <div className="text-sx flex flex-row gap-3">
            <p className="text-[var(--Red)]">{quantity}x</p>
            <p className="text-[var(--Rose-400)]">@ ${price}</p>
            <p className="text-green-600">${quantity * price}</p>
          </div>
        </div>

        <div disabled>
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
// console.log(isDeleting === "fetching" ? true : false);
