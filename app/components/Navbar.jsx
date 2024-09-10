import Image from 'next/image'
import Logo from '../public/logo.svg' 
import Link from 'next/link'
import Search from '../public/search.svg'
const Navbar = () => {
  return (
    <>
        <nav className='navbar flex items-center sticky top-0'>
            <div className="m-4">
                <Image height={60} width={60} src={Logo} alt='Logo'/>
            </div>
            <ul className='flex'>
                <li className='mx-12'><Link href="/home">Home</Link></li>
                <li className='mx-12'><Link href="/men">Men</Link></li>
                <li className='mx-12'><Link href="/women">Women</Link></li>
            </ul>
            <span className='search-bar-nav bg-nav-light flex justify-end relative'><input className='w-full h-full bg-nav-light' placeholder='search bar'/><Image className='search' height={30} width={30} src={Search} alt='search'/></span>
            <ul className='flex ml-12'>
                <li className='nav-account-button'>Login</li>
                <li className='text-3xl text-gray-500'>|</li>
                <li className='nav-account-button'>SignUp</li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar