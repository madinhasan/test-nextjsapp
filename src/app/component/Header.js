import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="header">
    <nav className="navbar container">
      <div className="logo">
      <Link href='/'>
       <Image src="/logo/white-logo-elephant.png" alt='logo' width={100} height={100} className='size-logo'></Image></Link>
      </div>
      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/about">Contact</Link></li>
      </ul>
    </nav>
  </header>
  )
}

export default Header