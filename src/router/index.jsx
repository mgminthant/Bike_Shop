import { createBrowserRouter } from "react-router-dom";
import App from "../layout/RootLayout";
import AccountLayout from "../layout/AccountLayout";

import Index from "../pages/Home/Index.jsx";
import Product from "../pages/Product/Index.jsx";
import CreateAccount from "../pages/Auth/Signup.jsx";
import WishList from "../pages/acc-feats/WishList.jsx";
import Order from "../pages/Auth/Order.jsx";
import Cart from "../pages/Cart/Index.jsx";
import CheckoutForm from "../pages/Checkout/Index.jsx";
import ProductDetail from "../pages/ProductDetail/Index.jsx";

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
        path: "product", element: <Product />
      },
      {
        path:"product/detail/:id",element: <ProductDetail />,
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
        path: "acc",
        element: <AccountLayout />,
        children: [
          { path: "wishlist", element: <WishList /> },
          { path: "*", element: <Order /> },
        ],
      },
    ],
  },
]);

export default router;
