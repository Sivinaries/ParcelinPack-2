import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Porto from "./pages/Porto";
import Service from "./pages/service/Service";
import MainService from "./pages/service/MainService";
import Product from "./pages/service/Product";
import SubProduct from "./pages/service/SubProduct";
import Detail from "./pages/service/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<MainService />}>
        <Route path="" element={<Service />} />
        <Route path=":idCategory" element={<Outlet />}>
          <Route path="" element={<Product />} />
          <Route path=":idProduct" element={<Outlet />}>
            <Route path="" element={<SubProduct />} />
            <Route path=":idSubProduct" element={<Detail />} />
          </Route>
        </Route>
      </Route>
      <Route path="/portfolio" element={<Porto />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;