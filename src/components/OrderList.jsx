import { GiTreeDoor } from "react-icons/gi";
import { Main } from "../ui/StylesComponents/OrderListStyle";
import PropTypes from "prop-types";
import Orders from "./Orders";

const OrderList = ({ customersOrders }) => {
  return (
    <Main>
      <div className="bg-[var(--Rose-20)] rounded-md p-5 border">
        <div className=" flex flex-col justify-start items-start ">
          <h2 className=" mb-3 font-bold text-[var(--Red)] font-serif">
            Your Cart(7)
          </h2>
        </div>

        {customersOrders.map((orders) => (
          <Orders key={orders.id} ordersContain={orders} />
        ))}

        <div className="flex justify-between items-center px-2 py-5">
          <p className="text-[var(--Rose-900)] text-xs font-light">
            Order Total
          </p>

          <p className="font-bold text-base text-[var(--Rose-(900)]">$46.50</p>
        </div>

        <div className="flex justify-center mt-4 py-4 items-center rounded bg-[var(--Rose-100)] text-[var(--Rose-500)] text-xs tracking-tight ">
          <p className="mr-1">
            <GiTreeDoor color="green" />
          </p>

          <p>
            This is a
            <span className="text-[var(--Rose-900)] mx-1 font-semibold">
              carbon natural
            </span>
            delivery
          </p>
        </div>

        <div className="flex justify-center mt-4 p-2 items-center rounded-2xl bg-[var(--Red)] text-[var(--Rose-100)] text-xs ">
          Confirm Order
        </div>
      </div>
    </Main>
  );
};

OrderList.propTypes = {
  customersOrders: PropTypes.any,
};

export default OrderList;
