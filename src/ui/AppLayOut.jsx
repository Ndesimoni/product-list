// import Loading from "./Loading";
// import Deserts from "../components/Deserts";
// import OrderList from "../components/OrderList";
// import { DivStyles, Main } from "./StylesComponents/AppLayOutStyles";
// import useGetQuery from "../utils/customeHooks/useGetQuery";
// import { useState } from "react";
// import OrderConfirm from "../components/OrderConfirm";
// import Items from "../components/Items";

// const AppLayOut = () => {
//   const { customersOrders, desserts, isLoading } = useGetQuery();
//   const [showOrder, setShowOrders] = useState(false);

//   if (isLoading)
//     return (
//       <div className="flex justify-center mt-[40vh]">
//         <Loading />
//       </div>
//     );

//   return (
//     <DivStyles>
//       <Main>
//         <Deserts
//           render={(dissert) => <Items key={dissert.id} dissert={dissert} />}
//         >
//           <Deserts.Disserts />
//         </Deserts>

//         <OrderList
//           customersOrders={customersOrders}
//           setShowOrders={setShowOrders}
//         />

//         {showOrder && (
//           <OrderConfirm
//             customersOrders={customersOrders}
//             setShowOrders={setShowOrders}
//           />
//         )}
//       </Main>
//     </DivStyles>
//   );
// };

// export default AppLayOut;

import Loading from "./Loading";
import Deserts from "../components/Deserts";
import OrderList from "../components/OrderList";
import { DivStyles, Main } from "./StylesComponents/AppLayOutStyles";
import useGetQuery from "../utils/customeHooks/useGetQuery";
import { useState } from "react";
import OrderConfirm from "../components/OrderConfirm";
import { Heading } from "../utils/Styles";

const AppLayOut = () => {
  const { isLoading } = useGetQuery();
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
        <Deserts>
          <Heading>Desserts</Heading>
          <Deserts.AllDesert />
        </Deserts>

        <OrderList setShowOrders={setShowOrders} />
        {showOrder && <OrderConfirm setShowOrders={setShowOrders} />}
      </Main>
    </DivStyles>
  );
};

export default AppLayOut;
