import styled from "styled-components";
import { Heading } from "../utils/Styles";
import Items from "./Items";

const Main = styled.main`
  background-color: green;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Section = styled.section`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Deserts = () => {
  return (
    <Main>
      <div>
        <Heading>Deserts</Heading>

        <Section>
          <Items />
          <Items />
          <Items />
        </Section>
      </div>
    </Main>
  );
};

export default Deserts;
