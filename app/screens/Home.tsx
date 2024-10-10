import React from 'react'
import Cards from '../Components/Cards'
import Chart1 from '../Components/Chart1'
import Chart2 from '../Components/Chart2'
import Chart3 from '../Components/Chart3'
import Chart4 from '../Components/Chart4'

function Home() {
  return (
    <div className=''>
      <div className='flex  justify-center items-center'>
        <Cards />
      </div>
      <div className='grid grid-cols-12'>
        <div className='col-span-7'>
          <Chart1 />
        </div>
        <div className='col-span-5'>
          <Chart2 />
        </div>
      </div>
      <div className='grid grid-cols-12'>
        <div className='col-span-6'>
          <Chart3 />
        </div>
        <div className='col-span-6'>
          <Chart4 />
        </div>
      </div>
    </div>
  )
}

export default Home