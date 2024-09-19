import styled from "styled-components";
import AppLayOut from "./ui/AppLayOut";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

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
        <Toaster
          position="top center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 1000,
              style: {
                color: "#42c501",
              },
            },
            error: {
              duration: 1000,
              style: {
                color: "red",
              },
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
            },
          }}
        />
      </QueryClientProvider>
    </AppStyle>
  );
};

export default App;
