import { FaRegFaceKissWinkHeart } from "react-icons/fa6";

import styled from "styled-components";

const Main = styled.main`
  width: 420px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 22%;
  text-align: center;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #cccc;

  padding: 15px 0px;
`;

const OrderConfirm = () => {
  return (
    <Main>
      <div className="bg-[var(--Rose-20)] rounded-md p-5 border">
        <FaRegFaceKissWinkHeart size="27px" color="green" />

        <div className=" flex flex-col justify-start items-start pt-3">
          <h2 className=" mb-3 font-bold">Order Confirmed</h2>
          <p className=" mb-3 text-xs text-[var(--Rose-400)] font-light ">
            We hope you enjoy your food!
          </p>
        </div>

        <div className="bg-[var(--Rose-100)] rounded px-3 ">
          <Item>
            <div className="flex items-center gap-2 text-xs ">
              <img
                src="images/image-brownie-thumbnail.jpg"
                alt="picture"
                className="h-8 rounded"
              />
              <div className="items-start flex flex-col">
                <p>Classic Tiramisu</p>
                <div className="text-sx flex -flex-row gap-3">
                  <p className="text-[var(--Red)]">1x </p>
                  <p className="text-[var(--Rose-400)]">@ $5.50</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs">$5.50</p>
            </div>
          </Item>

          <div className="flex justify-between items-center px-2  py-5">
            <p className="text-[var(--Rose-900)] text-xs font-light ">
              Order Total
            </p>
            {/* <div>
              <p>Order Total</p>
            </div> */}

            <p className="font-bold text-base text-[var(--Rose-(900)]">
              $46.50
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-4 p-2 items-center rounded-2xl bg-[var(--Red)] text-[var(--Rose-100)] text-xs ">
          Start New Order
        </div>
      </div>
    </Main>
  );
};

export default OrderConfirm;
