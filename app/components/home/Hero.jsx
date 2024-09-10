import HeroImage from '../../public/heroImage.jpg'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='hero-section relative'>
    <Image src={HeroImage} alt='hero-banner'/>
    <div className='absolute top-60 left-48 '>
        <h2 className='font-bold text-4xl text-nav-dark'>Everything for a fresh start</h2>
        <p className='text-lg text-nav-dark'>Take a look at our newest collections</p>
    </div>
    <div className='hero-div'></div>
    </div>
  )
}

export default Hero