import bike from "../../assets/img/others/bike.png";
import acess from "../../assets/img/others/acess.png";
import hat from "../../assets/img/others/hat.png";
import SingleProductList from "./SingleProductTitle.jsx";
import "../../assets/style/home/product-title.css";

const ProductList = () => {
  return (
    <div className="product-title-parent">
      <SingleProductList img={bike} text="MOUNTAIN & ROAD BIKES" />
      <SingleProductList img={hat} text="BICYCLE SPARE PARTS" />
      <SingleProductList img={acess} text="ACCESSORIES & CLOTHING" />
    </div>
  );
};

export default ProductList;
