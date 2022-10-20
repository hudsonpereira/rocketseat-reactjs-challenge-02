import { Route, Routes } from "react-router-dom";
import { Checkout } from "./pages/Checkout";
import { FinishOrder } from "./pages/FinishOrder";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/finish" element={<FinishOrder />} />
    </Routes>
  );
}
