import CategoryCard from '@/app/components/cards/CategoryCard'
import ProductsCard from '@/app/components/cards/ProductsCard'
import { categories } from '@/app/data/constants'
import React from 'react'

const Men = () => {
  return (
    <>
        <h1 className='text-nav-dark ml-[17rem] my-2 text-xl'>Men</h1>
      <div className='relative flex justify-center h-1/2 my-10'>
        {categories.map((item,key)=>(<CategoryCard key={key} item={item}/>))}
      </div>
      <div className='product-container'>
      <ProductsCard/>
      <ProductsCard/>
      <ProductsCard/>
      </div>
    </>
  )
}

export default Men