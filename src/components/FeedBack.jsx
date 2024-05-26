import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

// style
import "../styles/feedback.css";
import SingleFeedBack from "./SingleFeedBack";
const FeedBack = () => {
  const [slideLeft, setSlideLeft] = useState(false);
  const reviews = [
    `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad doloremque
        voluptatem vitae obcaecati, animi porro necessitatibus aperiam recusandae
        dolore, possimus error laborum! Nostrum, fuga magni eaque fugiat voluptatum
        unde voluptas!`,
    `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad doloremque
        voluptatem vitae obcaecati, animi porro necessitatibus aperiam recusandae
        dolore, possimus error laborum! Nostrum, fuga magni eaque fugiat voluptatum
        unde voluptas!`,
    `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad doloremque
        voluptatem vitae obcaecati, animi porro necessitatibus aperiam recusandae
        dolore, possimus error laborum! Nostrum, fuga magni eaque fugiat voluptatum
        unde voluptas!`,
    `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad doloremque
        voluptatem vitae obcaecati, animi porro necessitatibus aperiam recusandae
        dolore, possimus error laborum! Nostrum, fuga magni eaque fugiat voluptatum
        unde voluptas!`,
    `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad doloremque
        voluptatem vitae obcaecati, animi porro necessitatibus aperiam recusandae
        dolore, possimus error laborum! Nostrum, fuga magni eaque fugiat voluptatum
        unde voluptas!`,
  ];

  useEffect(() => {
    setTimeout(() => {
      setSlideLeft(false);
    }, 1000);
  }, [slideLeft]);

  return (
    <div className="feedback-parent">
      <FaAngleLeft onClick={() => setSlideLeft(true)} />
      <div className="slide">
        <div className={`feedback ${slideLeft && "slide-left"}`}>
          {reviews.map((item, index) => (
            <SingleFeedBack item={item} key={index} />
          ))}
        </div>
        <div className={`feedback ${slideLeft && "slide-left"}`}>
          {reviews.map((item, index) => (
            <SingleFeedBack item={item} key={index} />
          ))}
        </div>
      </div>
      <FaAngleRight />
    </div>
  );
};

export default FeedBack;
