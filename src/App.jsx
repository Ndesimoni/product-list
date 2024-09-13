import styled from "styled-components";
import AppLayOut from "./ui/AppLayOut";

const AppStyle = styled.div`
  display: flex;
  justify-content: center;
`;
const App = () => {
  return (
    <AppStyle>
      <AppLayOut />
    </AppStyle>
  );
};

export default App;
