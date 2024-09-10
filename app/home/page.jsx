import React from 'react'
import Hero from '../components/home/Hero'
import CategoryCard from '../components/cards/CategoryCard'
import {categories,brands} from '../data/constants'

import BrandCarousal from '../components/carousal/BrandCarousal'

const Home = () => {
  return (
    <>
      <Hero />
      <div className='flex justify-center h-1/2 my-10'>
        {categories.map((item,key)=>(<CategoryCard key={key} item={item}/>))}
      </div>
      <BrandCarousal brands={brands} />
    </>
  )
}

export default Home