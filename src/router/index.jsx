import { createBrowserRouter } from "react-router-dom";
import App from "../layout/RootLayout";
import AccountLayout from "../layout/AccountLayout";
import ProductLayout from "../layout/ProductLayout";

import Index from "../pages/Home/Index.jsx";
import Product from "../pages/Product/Index.jsx";
import CreateAccount from "../pages/Auth/Signup.jsx";
import WishList from "../pages/Auth/WishList.jsx";
import Order from "../pages/Auth/Order.jsx";
import Cart from "../pages/Cart/Index.jsx";
import CheckoutForm from "../pages/Checkout/Index.jsx";
import ProductDetail from "../pages/Product/ProductDetail/Index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Index />,
      },
      {
        path: "product",
        element: <ProductLayout />,
        children: [
          { path: "total", element: <Product /> },
          { path: "detail", element: <ProductDetail /> },
        ],
      },
      {
        path: "createaccount",
        element: <CreateAccount />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <CheckoutForm />,
      },
      {
        path: "useraccount",
        element: <AccountLayout />,
        children: [
          { path: "WishList", element: <WishList /> },
          { path: "order", element: <Order /> },
        ],
      },
    ],
  },
]);

export default router;
