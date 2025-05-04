import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import '../../assets/style/home/advantages.css'
const Advantanges = () => {
  return (
    <div className='advantage-parent'>
        <h1>OUR ADVANTANGES</h1>
        <div className="advantage-text">
          <div className="">
            <FaShippingFast/>
            <h2>Free shipping from $750</h2>
          </div>
          <div className="">
            <FaShippingFast/>
            <h2>Free shipping from $750</h2>
          </div>
          <div className="">
            <FaShippingFast/>
            <h2>Free shipping from $750</h2>
          </div>
          <div className="">
            <FaShippingFast/>
            <h2>Free shipping from $750</h2>
          </div>
        </div>
    </div>
  )
}

export default Advantanges;