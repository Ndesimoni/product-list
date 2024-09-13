import styled from "styled-components";
import Deserts from "../components/Deserts";
import OrderList from "../components/OrderList";

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`;

const DivStyles = styled.div`
  width: 1440px;
`;

const AppLayOut = () => {
  return (
    <DivStyles>
      <Main>
        <Deserts />
        <OrderList />
      </Main>
    </DivStyles>
  );
};

export default AppLayOut;
