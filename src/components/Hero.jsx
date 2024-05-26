import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { MdElectricBike } from "react-icons/md";
import bikes from "../data/data";
// style
import "../styles/hero.css";
const Hero = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const changeHeroBike = (con) => {
    if (!con) {
      if (index === 0) {
        return;
      }
    } else {
      if (index === 4) {
        return;
      }
    }
    con ? setIndex((prev) => prev + 1) : setIndex((prev) => prev - 1);
  };

  useEffect(() => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 1000);
  }, [index]);

  return (
    <div className="hero-parent">
      <div className="left-section">
        <FaChevronLeft
          onClick={() => changeHeroBike(false)}
          className={index !== 0 ? "active" : ""}
        />
        <span
          className={index === 0 ? "active" : ""}
          onClick={() => setIndex(0)}
        >
          01{index === 0 && <hr />}
        </span>
        <span
          className={index === 1 ? "active" : ""}
          onClick={() => setIndex(1)}
        >
          02 {index === 1 && <hr />}
        </span>
        <span
          className={index === 2 ? "active" : ""}
          onClick={() => setIndex(2)}
        >
          03 {index === 2 && <hr />}
        </span>
        <span
          className={index === 3 ? "active" : ""}
          onClick={() => setIndex(3)}
        >
          04 {index === 3 && <hr />}
        </span>
        <span
          className={index === 4 ? "active" : ""}
          onClick={() => setIndex(4)}
        >
          05 {index === 4 && <hr />}
        </span>
        <FaChevronLeft
          onClick={() => changeHeroBike(true)}
          className={index !== 4 ? "active" : ""}
        />
      </div>
      <div className="middle-section">
        <h1>GET YOUR DREAM BIKE</h1>
        <p className={animate ? "animate" : ""}>{bikes[index].pd_name}</p>
        <button className="buy">BUY NOW</button>
        <div className="bike-img">
          <div className={animate ? "animate" : ""}>
            <MdElectricBike />
            <span>
              {bikes[index].model}
              <br /> ${bikes[index].price}
            </span>
          </div>
          <img src={bikes[index].img} className={animate ? "animate" : ""} />
        </div>
      </div>
      <div className="right-section">
        <span>FACEBOOK</span>
        <span>YOUTUBE</span>
        <span>INSTAGRAM</span>
      </div>
    </div>
  );
};

export default Hero;
