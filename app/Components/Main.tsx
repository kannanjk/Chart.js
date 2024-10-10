import React from 'react'
import SideBar from '../screens/SideBar'
import Nav from '../screens/Nav'
import Home from '../screens/Home'

function Main() {
  return ( 
    <div className='grid grid-cols-12'>
      <div className='col-span-2'>
        <SideBar />
      </div>
      <div className='col-span-10'>
        <div className=''>
          <Nav />
        </div>
        <div className='w-full h-full bg-stone-100'>
          <Home />
        </div>
      </div>
    </div>
  )
}

export default Main