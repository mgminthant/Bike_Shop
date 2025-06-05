import { MdElectricBike } from "react-icons/md";

export default function HeroBike({ product, animate }) {
  return (
    <div className="middle-section">
      <h1>GET YOUR DREAM BIKE</h1>
      <p className={animate ? "animate" : ""}>{product.desc.pd_name}</p>
      <button className="buy">BUY NOW</button>
      <div className="bike-img">
        <div className={animate ? "animate" : ""}>
          <MdElectricBike />
          <span>
            {product.model}
            <br /> ${product.price}
          </span>
        </div>
        <img src={product.img} className={animate ? "animate" : ""} alt={"bike image"}/>
      </div>
    </div>
  );
}
