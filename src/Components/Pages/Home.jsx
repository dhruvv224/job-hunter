import React from 'react'
import Herosection from '../Herosection'
import CategoryCarousel from '../CategoryCarousel'
import LatestJobs from '../LatestJobs'

const Home = () => {
  return (
    <div>
      <Herosection/>
      <CategoryCarousel/>
      <LatestJobs/>
    </div>
  )
}

export default Home