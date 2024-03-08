import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./reduxStore/config/configStore.ts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyle from "./Globalstyle.ts";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <GlobalStyle />
    <Provider store={store}>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </Provider>
    <ReactQueryDevtools initialIsOpen={true} />
  </QueryClientProvider>
);
