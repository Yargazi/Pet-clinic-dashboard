import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppWrapper } from "../context/Context";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </AppWrapper>
  );
}

export default MyApp;
