import styled from "styled-components";
import AppLayOut from "./ui/AppLayOut";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const AppStyle = styled.div`
  display: flex;
  justify-content: center;
`;

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <AppStyle>
      <QueryClientProvider client={queryClient}>
        <AppLayOut />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AppStyle>
  );
};

export default App;
