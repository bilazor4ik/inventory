import React from 'react'
import {OverviewCards} from './sections/OverviewCards'
import {RecentActivity} from './sections/RecentActivity'
const Home = () => {
  return (
  
      <div className="mt-8">
        {/* Overview Cards with inventory totals*/}
        <OverviewCards />

        {/* Recent inventory activity*/}
       
        <RecentActivity/>
      </div>

  )
}

export default Home