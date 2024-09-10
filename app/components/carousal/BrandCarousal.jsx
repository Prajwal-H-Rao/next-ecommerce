import React from 'react'
import Image from 'next/image'
const BrandCarousal = ({brands}) => {
    return (
        <>
            <div className="slider relative flex justify-center">
            <h2 className='absolute top-8 left-32 font-bold text-nav-dark'>Our Partners</h2>
                <div className="slide-track">
                    {brands?.map((item,key)=>{
                        return(<div key={key}>
                            <Image className='banner-logo' height={100} width={100} src={item.url} alt='item.brand'/>
                        </div>)
                    })}
                </div>
            </div>
        </>
    )
}

export default BrandCarousal