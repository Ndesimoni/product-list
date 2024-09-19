import Loading from "./Loading";
import Deserts from "../components/Deserts";
import OrderList from "../components/OrderList";
import { DivStyles, Main } from "./StylesComponents/AppLayOutStyles";
import useGetQuery from "../utils/customeHooks/useGetQuery";
import { useState } from "react";
import OrderConfirm from "../components/OrderConfirm";

const AppLayOut = () => {
  const { customersOrders, desserts, isLoading } = useGetQuery();
  const [showOrder, setShowOrders] = useState(false);

  if (isLoading)
    return (
      <div className="flex justify-center mt-[40vh]">
        <Loading />
      </div>
    );

  return (
    <DivStyles>
      <Main>
        <Deserts disserts={desserts} />
        <OrderList
          customersOrders={customersOrders}
          setShowOrders={setShowOrders}
        />

        {showOrder && (
          <OrderConfirm
            customersOrders={customersOrders}
            setShowOrders={setShowOrders}
          />
        )}
      </Main>
    </DivStyles>
  );
};

export default AppLayOut;
