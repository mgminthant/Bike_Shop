import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductGallery from "./ProductGallery.jsx";
import ProductInfo from "./ProductInfo.jsx";
import ProductTab from "./ProductTab.jsx";
import "../../assets/style/product/product-detail.css";

export default function ProductDetail() {
  const { id } = useParams();
  let totalProducts = useSelector((state) => state.totalProducts.products);
  const product = totalProducts.filter((product) => product.id === id)[0];

  const productInfoProps = {
    id:product.id,
    title: product.desc.pd_name,
    framesizes: product.framesizes,
    discount: product.discount,
    price: product.price,
    instock:product.desc.instock
  };

  return (
    <div className="product-page">
      {/* Product Main Section */}
      <div className="product-main">
        <ProductGallery productImgs={product.productImgs} />
        <ProductInfo product={productInfoProps} />
      </div>
      {/* Tabs */}
       <ProductTab />
    </div>
  );
}
