import React from 'react'
import { data } from '../../data/PantsData'
import Cards from '../../components/CardsSection/Cards'

import AutoCarousel from '../../components/PantAutoCarousel'

import RunningText from '../../components/RunningText'

const Pants = () => {
  return (<div>
    
    <div className='bg-gray-100 w-full flex flex-col items-center ' >
      <AutoCarousel />
      <RunningText />
      <div className='w-full flex flex-col items-center'>

        <Cards data={data} basePath="pants"  />
    
      </div>
      
    </div>
    
  </div>
  )
}

export default Pants;
        