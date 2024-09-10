import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CategoryCard = ({item}) => {
  return (
    <div className='h-full overflow-hidden mx-12 relative card-container'>
        <Image height={400} src={item.image} alt='category'/>
        <div className='card-category-name'><Link href={item.link}>{item.category_name}</Link></div>
    </div>
  )
}

export default CategoryCard