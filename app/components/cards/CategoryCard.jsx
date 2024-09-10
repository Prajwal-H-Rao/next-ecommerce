import React from 'react'
import Image from 'next/image'

const CategoryCard = ({image}) => {
  return (
    <div className='h-full overflow-hidden mx-12 relative card-container'>
        <Image height={400} src={image} alt='category'/>
        <div className='card-category-name'>Category</div>
    </div>
  )
}

export default CategoryCard