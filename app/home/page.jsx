import React from 'react'
import Hero from '../components/Hero'
import CategoryCard from '../components/CategoryCard'

import Bottle from '../public/bottle.jpg'
import Shoes from '../public/shoes.jpg'
import Hoodie from '../public/hoodie.jpg'
import BrandCarousal from '../components/BrandCarousal'

const Home = () => {
  const brands = [{ "url": "https://i.pinimg.com/736x/33/e6/3d/33e63d5adb0da6b303a83901c8e8463a.jpg", "brand": "nike" }, { 'url': "https://cdn.freebiesupply.com/logos/large/2x/adidas-logo.png", "brand": "Adidas" },{"url":"https://cdn.freebiesupply.com/logos/large/2x/puma-logo-png-transparent.png","brand":"Puma"}]
  return (
    <>
      <Hero />
      <div className='flex justify-center h-1/2 my-10'>
        <CategoryCard image={Shoes} />
        <CategoryCard image={Hoodie} />
        <CategoryCard image={Bottle} />
      </div>
      <BrandCarousal brands={brands} />
    </>
  )
}

export default Home