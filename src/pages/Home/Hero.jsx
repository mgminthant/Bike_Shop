import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";

import HeroBike from "./HeroBike.jsx";
import HeroBikeNav from "./HeroBikeNav.jsx";

import data from "../../data/data.js";

import "../../assets/style/home/hero.css";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const changeHeroBike = (con) => {
    if (con) {
      index === 0 ? setIndex(4) : setIndex((prev) => prev - 1);
    } else {
      index === 4 ? setIndex(0) : setIndex((prev) => prev + 1);
    }
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
        <FaChevronLeft onClick={() => changeHeroBike(true)} />
        {[0, 1, 2, 3, 4].map((item) => (
          <HeroBikeNav
            index={index}
            key={item}
            item={item}
            setIndex={setIndex}
          />
        ))}
        <FaChevronLeft onClick={() => changeHeroBike(false)} />
      </div>
      <HeroBike product={data.totalProducts[index]} animate={animate} />
      <div className="right-section">
        <span>FACEBOOK</span>
        <span>YOUTUBE</span>
        <span>INSTAGRAM</span>
      </div>
    </div>
  );
};

export default Hero;
