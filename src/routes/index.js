import CreateProductPage from "../pages/CreateProductPage";
import HomePage from "../pages/HomePage";
import Login from "../pages/LoginPage";
import ProductPage from "../pages/ProductPage";

export const guestRoute = [{ path: "login", component: Login }];

export const adminRoute = [
  { path: "", component: HomePage },
  { path: "products", component: ProductPage },
  { path: "/create_product", component: CreateProductPage },
  { path: "*", component: () => <></> },
];
