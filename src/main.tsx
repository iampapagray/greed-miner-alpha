import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import ReactDOM from "react-dom/client";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import {
  MinePage,
  RefineryPage,
  MarketPage,
  RankPage,
  ProfilePage,
} from "./views";
// this manifest is used temporarily for development purposes
const manifestUrl =
  "https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route index element={<MinePage />} />
      <Route path="/greed-miner-alpha/#refinery" element={<RefineryPage />} />
      <Route path="/greed-miner-alpha/#market" element={<MarketPage />} />
      <Route path="/greed-miner-alpha/#rank" element={<RankPage />} />
      <Route path="/greed-miner-alpha/#profile" element={<ProfilePage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </TonConnectUIProvider>
);
