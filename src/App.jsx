import { Routes, Route, Outlet } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Service from "./pages/Service"
import Main from "./pages/Product/Main"
import Product from "./pages/Product/Product"
import SubProduct from "./pages/Product/SubProduct"
import Detail from "./pages/Product/Detail"
import Contact from "./pages/Contact"
import Porto from "./pages/Porto"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/product" element={<Main />}>
        <Route path="" element={<Product />} />
        <Route path=":slug" element={<Outlet />}>
          <Route path="" element={<SubProduct />} />
          <Route path=":subSlug" element={<Detail />} />
        </Route>
      </Route>
      <Route path="/portfolio" element={<Porto />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}

export default App
