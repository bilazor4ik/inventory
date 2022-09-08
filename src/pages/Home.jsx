import React from 'react'

import { OverviewCards } from '../components/Home/sections/OverviewCards'
import { RecentActivity } from '../components/Home/sections/RecentActivity'



const Home = () => {


  return (
    <>
      <div className="mt-8">

        <OverviewCards />


        <h2 className="mt-8 max-w-6xl px-4 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8">
          Recent activity
        </h2>

        <RecentActivity/>
        
      </div>

    </>
  )
}

export default Home