import styled from "styled-components";
import { IoIosCloseCircleOutline } from "react-icons/io";

import { GiTreeDoor } from "react-icons/gi";

const Main = styled.main`
  width: 350px;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #cccc;
  padding-top: 12px;
  padding-bottom: 15px;
`;

const OrderList = () => {
  return (
    <Main>
      <div className="bg-[var(--Rose-20)] rounded-md p-5 border">
        <div className=" flex flex-col justify-start items-start ">
          <h2 className=" mb-3 font-bold text-[var(--Red)] font-serif">
            Your Cart(7)
          </h2>
        </div>

        <div className=" rounded px-3   ">
          <Item>
            <div className="items-start flex flex-col text-xs">
              <p>Classic Tiramisu</p>
              <div className="text-sx flex flex-row gap-3">
                <p className="text-[var(--Red)]">1x </p>
                <p className="text-[var(--Rose-400)]">@ $5.50</p>
                <p className="text-[var(--Rose-500)]">$5.50</p>
              </div>
            </div>

            <div>
              <IoIosCloseCircleOutline size="20px" color="var(--Rose-400" />
            </div>
          </Item>

          <div className="flex justify-between items-center px-2 py-5">
            <p className="text-[var(--Rose-900)] text-xs font-light">
              Order Total
            </p>

            <p className="font-bold text-base text-[var(--Rose-(900)]">
              $46.50
            </p>
          </div>
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
          Start New Order
        </div>
      </div>
    </Main>
  );
};

export default OrderList;

// <Main>
//       <div className="bg-[var(--Rose-50)] rounded-md p-5 ">
//         <IoIosCloseCircleOutline size="20px" color="green" />

//         <div className=" flex flex-col justify-start items-start ">
//           <h2 className=" mb-3 font-bold">Order Confirmed</h2>
//           <p className=" mb-3 text-xs">We ope you enjoy your food</p>
//         </div>

//         <div className="bg-[var(--Rose-100)] rounded px-3 ">
//           <Item>
//             <div className="flex items-center gap-2 text-xs ">
//               <img
//                 src="images/image-brownie-thumbnail.jpg"
//                 alt="picture"
//                 className="h-8 rounded"
//               />
//               <div className="items-start flex flex-col">
//                 <p>Classic Tiramisu</p>
//                 <p className="text-sx">
//                   {" "}
//                   <span className="text-red-600">1x </span> @ $5.50
//                 </p>
//               </div>
//             </div>

//             <div>
//               <p className="text-xs">$5.50</p>
//             </div>
//           </Item>

//           <div className="flex justify-between items-center p-2 ">
//             <div>
//               <p>Order Total</p>
//             </div>

//             <p>$46.50</p>
//           </div>
//         </div>

//         <div className="flex justify-center mt-4 p-2 items-center rounded-2xl bg-[var(--Red)] text-[var(--Rose-100)] text-xs ">
//           Start New Order
//         </div>
//       </div>
//     </Main>
