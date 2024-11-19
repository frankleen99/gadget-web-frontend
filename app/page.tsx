import React from 'react'
import Slider from './components/Slider';
import Grids from './components/Grids';
import Surface from './components/Surface';
import GoodDeals from './components/GoodDeals'
import NewArrivals from './components/NewArrivals';
import Footer from './components/Footer';
import Navbar from './components/Menu';

const page = () => {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Grids/>
      <Surface/>
      <GoodDeals/>
      <NewArrivals/>
      <Footer/>
    </div>
  )
}

export default page;
 