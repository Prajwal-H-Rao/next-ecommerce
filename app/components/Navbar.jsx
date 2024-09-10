import Image from 'next/image'
import Logo from '../public/logo.svg' 
import Link from 'next/link'
import Search from '../public/search.svg'
import {navLinks,categories} from '../data/constants'
const Navbar = () => {
  return (
    <>
        <nav className='navbar flex items-center sticky top-0'>
            <div className="m-4">
                <Link href="/home"><Image height={60} width={60} src={Logo} alt='Logo'/></Link>
            </div>
            <ul className='flex'>
                {navLinks.map((item,key)=>(<li key={key} className='mx-12 hover:text-nav-light'><Link href={item.link}>{item.title}</Link></li>))}
            </ul>
            <span className='search-bar-nav bg-nav-light flex justify-end relative'><input className='w-full h-full bg-nav-light focus:outline-none' placeholder='search bar'/><Image className='search' height={30} width={30} src={Search} alt='search'/></span>
            <ul className='flex ml-12'>
                <li className='nav-account-button'><Link href="/login">Login</Link></li>
                <li className='text-3xl text-gray-500'>|</li>
                <li className='nav-account-button'><Link href="/signup">Signup</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar