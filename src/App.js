import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CreateProductPage from "./pages/CreatProductPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/create_product" element={<CreateProductPage />} />
        <Route path="*" element={<Layout></Layout>} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
