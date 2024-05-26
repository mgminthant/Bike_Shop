import React from "react";
import Hero from '../components/Hero'
import ProductTitle from '../components/ProductTitle'
import Advantanges from '../components/Advantanges'
import FeedBack from '../components/FeedBack'
import Contact from '../components/Contact'


const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <ProductTitle />
      <Advantanges />
      <FeedBack />
      <Contact />
    </React.Fragment>
  );
};

export default Home;
