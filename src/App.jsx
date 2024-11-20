import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import MenCollection from "./pages/MenCollection";
import WomenCollection from "./pages/WomenCollection";
import KidsCollection from "./pages/KidsCollection";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="menswear" element={<MenCollection />} />
            <Route path="womenwear" element={<WomenCollection />} />
            <Route path="kidswear" element={<KidsCollection />} />
            <Route path="shop" element={<Shop />} />
            <Route path="prodetail/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
