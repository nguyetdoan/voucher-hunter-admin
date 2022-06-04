import NotFound from "../components/NotFound/index";
import CreateProductPage from "../pages/CreateProductPage";
import HomePage from "../pages/HomePage";
import Login from "../pages/LoginPage";
import ProductPage from "../pages/ProductPage";

export const guestRoute = [
  { path: "/login", component: Login },
  { path: "*", component: Login },
];

export const adminRoute = [
  { path: "", component: HomePage },
  { path: "vouchers", component: ProductPage },
  { path: "create_voucher", component: CreateProductPage },
  { path: "*", component: NotFound },
];
