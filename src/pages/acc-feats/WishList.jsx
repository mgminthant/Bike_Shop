import { useDispatch, useSelector } from "react-redux";
import SingleHeartItem from "./SingleHeartItem.jsx";
import "../../assets/style/auth/useraccount.css";
import {deleteAllFavourite,deleteFavourite} from "../../redux/slices/favouriteSlice.js";
import useGetData from "../../hooks/useGetData.js";

const WishList = () => {
  const heartItemsId = useSelector((state) => state.favourite.favourites);
  const dispatch = useDispatch();

  const heartItems  = heartItemsId.map((heartItem) => {
      let item = useGetData(heartItem);
      return item;
  });

  return (
    <div className="wish-list">
      <div className="top">
        <h1>Wish List</h1>
        <small>
          {heartItems.length} item{heartItems.length > 1 ? "s" : ""} saved
        </small>
      </div>
      {heartItems.length === 0 && (
        <h2 className="empty">Your Wish List is empty!</h2>
      )}
      {heartItems.map((item, index) => (
        <SingleHeartItem item={item} key={index} deleteFavourite={deleteFavourite} />
      ))}
      {heartItems.length !== 0 && (
        <p className="remove" onClick={() => dispatch(deleteAllFavourite())}>
          Remove all products
        </p>
      )}
    </div>
  );
};

export default WishList;
