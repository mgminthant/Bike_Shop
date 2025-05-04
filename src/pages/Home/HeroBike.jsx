import { MdElectricBike } from "react-icons/md";

export default function HeroBike({ data, index, animate }) {
  return (
    <div className="middle-section">
      <h1>GET YOUR DREAM BIKE</h1>
      <p className={animate ? "animate" : ""}>{data.bikes[index].pd_name}</p>
      <button className="buy">BUY NOW</button>
      <div className="bike-img">
        <div className={animate ? "animate" : ""}>
          <MdElectricBike />
          <span>
            {data.bikes[index].model}
            <br /> ${data.bikes[index].price}
          </span>
        </div>
        <img src={data.bikes[index].img} className={animate ? "animate" : ""} />
      </div>
    </div>
  );
}
