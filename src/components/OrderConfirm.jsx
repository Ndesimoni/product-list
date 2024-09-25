import { FaRegFaceKissWinkHeart } from "react-icons/fa6";
import { Item, Main } from "../ui/StylesComponents/OrderListStyle";
import PropTypes from "prop-types";
import useGetQuery from "../utils/customeHooks/useGetQuery";
// import UseDeleteAllCustomersOrders from "../utils/customeHooks/UseDeleteAllCustomersOrders";

const OrderConfirm = ({ setShowOrders }) => {
  const { customersOrders } = useGetQuery();

  const toggle = customersOrders.length >= 1;
  let totalPrice = 0;

  if (customersOrders.length > 0) {
    for (let i = 0; i < customersOrders.length; i++) {
      totalPrice = totalPrice +=
        customersOrders[i].quantity * customersOrders[i].price;
    }
  }

  const handleClearAll = () => {
    setShowOrders(false);
  };
  return (
    <>
      {toggle && (
        <Main>
          <div className="bg-[var(--Rose-20)] rounded-md p-5 border">
            <FaRegFaceKissWinkHeart size="27px" color="green" />

            <div className=" flex flex-col justify-start items-start pt-3">
              <h2 className=" mb-3 font-bold">Order Confirmed</h2>
              <p className=" mb-3 text-xs text-[var(--Rose-400)] font-light ">
                We hope you enjoy your food!
              </p>
            </div>

            {
              <div className="bg-[var(--Rose-100)] rounded px-3 ">
                {customersOrders.map((orders) => (
                  <Item key={orders.id}>
                    <div className="flex items-center gap-2 text-xs ">
                      <img
                        src={orders.image}
                        alt="picture"
                        className="h-8 rounded"
                      />
                      <div className="items-start flex flex-col">
                        <p>{orders.name}</p>
                        <div className="text-sx flex -flex-row gap-3">
                          <p className="text-[var(--Red)]">
                            {orders.quantity}x{" "}
                          </p>
                          <p className="text-[var(--Rose-400)]">@ $5.50</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs">
                        ${orders.quantity * orders.price}
                      </p>
                    </div>
                  </Item>
                ))}

                <div className="flex justify-between items-center px-2  py-5">
                  <p className="text-[var(--Rose-900)] text-xs font-light ">
                    Order Total
                  </p>

                  <p className="font-bold text-base text-[var(--Rose-(900)]">
                    {totalPrice}
                  </p>
                </div>
              </div>
            }

            <div
              onClick={handleClearAll}
              className="flex justify-center mt-4 p-2 items-center rounded-2xl bg-[var(--Red)] text-[var(--Rose-100)] text-xs "
            >
              Start New Order
            </div>
          </div>
        </Main>
      )}
    </>
  );
};

OrderConfirm.propTypes = {
  customersOrders: PropTypes.any,
  setShowOrders: PropTypes.any,
};

export default OrderConfirm;
