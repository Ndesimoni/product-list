import { useQuery } from "@tanstack/react-query";
import {
  getAllItems,
  getCustomersOrders,
} from "../utils/DATA-BASE/DATA-BASE-api";
import Loading from "./Loading";
import Deserts from "../components/Deserts";
import OrderList from "../components/OrderList";
import { DivStyles, Main } from "./StylesComponents/AppLayOutStyles";

const AppLayOut = () => {
  //todo get product list
  const { data: desserts = [], isLoading } = useQuery({
    queryKey: ["Product-list"],
    queryFn: getAllItems,
  });
  //todo get customers orders
  const { data: customersOrders = [], isLoading: LoadingOrders } = useQuery({
    queryKey: ["Customers-Order"],
    queryFn: getCustomersOrders,
  });

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
          LoadingOrders={LoadingOrders}
        />
        {/* <OrderConfirm /> */}
      </Main>
    </DivStyles>
  );
};

export default AppLayOut;

// import Deserts from "../components/Deserts";
// import OrderList from "../components/OrderList";
// import { DivStyles, Main } from "./StylesComponents/AppLayOutStyles";

// const AppLayOut = () => {
//   const { data: desserts = [], isLoading } = useQuery({
//     queryKey: ["Product-list"],
//     queryFn: getAllItems,
//   });

//   if (isLoading)
//     return (
//       <div className="flex justify-center mt-[40vh]">
//         <Loading />
//       </div>
//     );

//   return (
//     <DivStyles>
//       <Main>
//         <Deserts />
//         <OrderList />
//         {/* <OrderConfirm /> */}
//       </Main>
//     </DivStyles>
//   );
// };

// export default AppLayOut;
