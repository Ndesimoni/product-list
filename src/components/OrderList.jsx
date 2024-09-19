import { GiTreeDoor } from "react-icons/gi";
import { Main } from "../ui/StylesComponents/OrderListStyle";
import PropTypes from "prop-types";
import Orders from "./Orders";
import OrderListDefault from "./OrderListDefault";

const OrderList = ({ customersOrders, setShowOrders }) => {
  if (customersOrders.length < 0) return <OrderListDefault />;

  let totalPrice = 0;

  if (customersOrders.length > 0) {
    for (let i = 0; i < customersOrders.length; i++) {
      totalPrice = totalPrice +=
        customersOrders[i].quantity * customersOrders[i].price;
    }
  }

  const handleShowOrder = () => {
    setShowOrders(true);
  };

  return (
    <Main type="list">
      {customersOrders.length > 0 ? (
        <div className="bg-[var(--Rose-20)] rounded-md p-5 border">
          <div className=" flex flex-col justify-start items-start ">
            <h2 className=" mb-3 font-bold text-[var(--Red)] font-serif">
              Your Cart( {customersOrders.length})
            </h2>
          </div>

          {customersOrders.map((orders) => (
            <Orders key={orders.id} ordersContain={orders} />
          ))}

          <div className="flex justify-between items-center px-2 py-5">
            <p className="text-[var(--Rose-900)] text-xs font-light">
              Order Total
            </p>

            <p className="font-bold text-base text-[var(--Rose-(900)]">
              {totalPrice}
            </p>
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

          <div
            onClick={handleShowOrder}
            className="flex justify-center mt-4 p-2 items-center rounded-2xl bg-[var(--Red)] text-[var(--Rose-100)] text-xs "
          >
            Confirm Order
          </div>
        </div>
      ) : (
        <div>
          <img src="image/illustration-empty-cart.svg" />
        </div>
      )}
    </Main>
  );
};

OrderList.propTypes = {
  customersOrders: PropTypes.any,
  setShowOrders: PropTypes.any,
};

export default OrderList;
