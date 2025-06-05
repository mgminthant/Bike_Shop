import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import {useState} from "react";

export default function ProductGallery({ productImgs }) {
    const [currentIndex,setCurrentIndex] = useState(0);
    const handleLeftClick = () => {
        if(currentIndex === 0){
            setCurrentIndex(productImgs.length-1);
        }else{
            setCurrentIndex(currentIndex-1);
        }
    }

    const handleRightClick = () => {
        if(currentIndex === productImgs.length-1){
            setCurrentIndex(0);
        }else {
            setCurrentIndex(currentIndex+1);
        }
    }

  return (
    <div className="product-gallery">
      <div className="main-image">
        <button className="gallery-nav prev" onClick={handleLeftClick} >
          <FaAngleLeft />
        </button>
        <img
          src={productImgs[currentIndex]}
          alt="Lapierre XELIUS DRS 8.0 C2 - Carbon Road Bike"
          className="product-image"
        />
        <button className="gallery-nav next" onClick={handleRightClick}>
          <FaAngleRight  />
        </button>
      </div>
        <div className={"img-navigator"}>
            {
                productImgs.map((product, index) => (<img src={product} key={index} alt={"bike image"}
                                                          className={`${currentIndex===index ? 'current':''}`}
                        onClick={()=>(setCurrentIndex(index))}
                />))
            }
        </div>
    </div>
  );
}
