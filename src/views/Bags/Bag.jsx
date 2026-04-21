import React from 'react'
import { data } from '../../data/BagsData'
import Cards from '../../components/CardsSection/Cards'


import RunningText from '../../components/RunningText'
import AutoCarousel from '../../components/BagAutoCarousel'
const Bags = () => {
  return (<div>
    
    <div className='bg-gray-100 w-full flex flex-col items-center ' >
      <AutoCarousel />
      <RunningText />
      <div className='w-full flex flex-col items-center'>

        <Cards data={data} basePath="bags"  />

      </div>
      
    </div>
    
  </div>
  )
}

export default Bags;
        