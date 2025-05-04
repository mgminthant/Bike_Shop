import SingleFeedBack from "./SingleFeedBack.jsx";

import "../../assets/style/home/feedback.css";
const FeedBack = () => {
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

  return (
    <div className="feedback-parent">
      <div className="slide">
        <div className="feedback">
          {reviews.map((item, index) => (
            <SingleFeedBack item={item} key={index} />
          ))}
        </div>
        <div className="feedback">
          {reviews.map((item, index) => (
            <SingleFeedBack item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
