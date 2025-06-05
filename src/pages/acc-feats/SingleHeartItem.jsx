import React, {useEffect} from "react";
import { CiTrash } from "react-icons/ci";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../redux/slices/cartSlice.js";
import AddAlert from "../../components/overlays/notification/Notification.jsx";
import {NavLink, useNavigate} from "react-router-dom";
import {calculateInstockOrNot} from "../../utils/stockUtils.js";

const SingleHeartItem = ({ item,deleteFavourite }) => {
  const [alert,setAlert] = React.useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addCartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    const alertTimer = setTimeout(() => {
      setAlert("");
    }, 3000);

    return () => clearTimeout(alertTimer);
  }, [alert]);

  const addToCartHanlder=()=>{
    setAlert('Cart')
    dispatch(
        addToCart({
          id: item.id,
          framesize: item.default_frame_size,
        })
    );
  }

  const singleItemInCart = addCartItems.find((cart) => {
    return cart.id === item.id;
  });

  return (
    <div className="single-heart">
      <div className="img-pr">
        <img src={item.img} alt="" />
        <div>
          <p className="name">{item.name}</p>
          <p>{item.price}$</p>
          <small className={'fav'}>
            Still {item.desc.instock } In stock - Delivery time to Germany 2-6 working
            days
          </small>
        </div>
      </div>
      <div className="trash-price">
        <CiTrash onClick={() => dispatch(deleteFavourite(item.id))} className="res-none"/>
        <small className="date">Item added 2024-06-08</small>
        <div className="btn-group">
          <NavLink className={'detail'} to={`/product/detail/${item.id}`}>Detail</NavLink>
          <button  className={`${
              calculateInstockOrNot(item.desc.instock, singleItemInCart?.quantity) ? "outofstock" : ""
          }`} onClick={addToCartHanlder}>ADD TO CART</button>
        </div>
      </div>
      {alert && (
          <AddAlert
              whatAdd={alert}
              go={"SHOPPING CART"}
              setAlert={setAlert}
              goToHandler={() => navigate( "/cart")}
          />
      )}
    </div>
  );
};

export default SingleHeartItem;
