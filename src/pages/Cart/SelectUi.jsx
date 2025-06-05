import React from "react";
import { useSelector } from "react-redux";

export default function SelectUi({ removeId, setRemoveId }) {
  let total_cart_items = useSelector((state) => state.cart.items);

  const handleDeselectAll = () => {
    if (removeId.length === total_cart_items.length) {
      setRemoveId([]);
    } else {
      setRemoveId(total_cart_items.map((item) => item.id));
    }
  };
  return (
    <div className={"choice"}>
      Select {total_cart_items.length - removeId.length} of
      {total_cart_items.length +" | "}
      <span onClick={handleDeselectAll}>
        {total_cart_items.length === removeId.length
          ? "Select All "
          : " Deselect All "}
        Articles
      </span>
    </div>
  );
}
