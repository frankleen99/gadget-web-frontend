import React from 'react'
import Slider from './components/Slider';
import Grids from './components/Grids';
import Surface from './components/Surface';
import GoodDeals from './components/Gooddeals'
import NewArrivals from './components/NewArrivals';

const page = () => {
  return (
    <div>
      <Slider/>
      <Grids/>
      <Surface/>
      <GoodDeals/>
      <NewArrivals/>
    </div>
  )
}

export default page;
 