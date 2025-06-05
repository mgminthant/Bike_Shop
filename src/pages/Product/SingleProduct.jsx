import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addToCart } from "../../redux/slices/cartSlice";
import { toggleFavourite } from "../../redux/slices/favouriteSlice";

import ProductDataComp from "./ProductDataComp";
import AddAlert from "../../components/overlays/notification/Notification.jsx";
import Login from "../../components/overlays/Auth/Login.jsx";
const SingleProduct = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [alert, setAlert] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const favouriteItems = useSelector((state) => state.favourite.favourites);
  const user = useSelector((state) => state.auth.user);
  
  const addCartItems = useSelector((state) => state.cart.items);

  const isFavoriteItem = favouriteItems.includes(item.id);

  useEffect(() => {
    const alertTimer = setTimeout(() => {
      setAlert("");
    }, 3000);

    return () => clearTimeout(alertTimer);
  }, [alert]);

  const singleItemInCart = addCartItems.find((cart) => {
    return cart.id === item.id;
  });

  const addToCartHandler = () => {
    dispatch(
      addToCart({
        id: item.id,
        framesize: item.default_frame_size,
      })
    );
    setAlert("Cart");
  };

  const toggleHeartHandler = () => {
    if (user) {
      dispatch(toggleFavourite(item.id));
      setAlert("WishList");
    } else {
      setShowLogin(true);
    }
  };

  const buyNowBtnHandler = () => {
    dispatch(
      addToCart({
        id: item.id,
        framesize: item.default_frame_size,
      })
    );
    navigate("/cart");
  };

  return (
    <div className="single-product">
      {alert !== "" && (
        <AddAlert
          whatAdd={alert}
          isFavourite={isFavoriteItem}
          go={alert === "Cart" ? "SHOPPING CART" : "WishList"}
          setAlert={setAlert}
          goToHandler={() => navigate(alert==="Cart" ? "/cart" : '/acc/wishlist')}
        />
      )}
      <ProductDataComp
        item={item}
        toggleHeartHandler={toggleHeartHandler}
        buyNowBtnHandler={buyNowBtnHandler}
        addToCartHandler={addToCartHandler}
        singleItemInCart={singleItemInCart}
        isFavoriteItem={isFavoriteItem}
      />
      {showLogin && <Login setShowLogin={setShowLogin} />}
    </div>
  );
};

export default SingleProduct;
