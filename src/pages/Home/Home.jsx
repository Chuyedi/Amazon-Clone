import React from 'react'
import Carousel from "../../Components/Carousel/CarouselEffects";
import Category from "../../Components/Category/Category";
import Product from '../../Components/Products/Product';
import Layout from '../../Components/Layout/Layout';
const Home = () => {
  return (
    <Layout>
    
      <Carousel />
      <Category />
      <Product/>
      
    </Layout>
  );
}

export default Home;
