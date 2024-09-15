import styled from "styled-components";
import Deserts from "../components/Deserts";
import OrderList from "../components/OrderList";
import OrderConfirm from "../components/OrderConfirm";

const Main = styled.main`
  display: flex;
  flex-direction: row;
  align-items: top;
  gap: 20px;
`;

const DivStyles = styled.div`
  width: 1440px;
  display: flex;
  justify-content: center;
  padding: 50px;
`;

const AppLayOut = () => {
  return (
    <DivStyles>
      <Main>
        <Deserts />
        <OrderList />
        <OrderConfirm />
      </Main>
    </DivStyles>
  );
};

export default AppLayOut;
