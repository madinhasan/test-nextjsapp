import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    
    <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-logo">
        <Link href='/'>
       <Image src="./logo/white-logo-elephant.png" alt='logo' width={100} height={100} className='size-logo'></Image></Link>
        </div>
        <div className="footer-links">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/about">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-social">
          <ul>
            <li><Link href="#" target="_blank" rel="noopener noreferrer">Facebook</Link></li>
            <li><Link href="#" target="_blank" rel="noopener noreferrer">Twitter</Link></li>
            <li><Link href="#" target="_blank" rel="noopener noreferrer">Instagram</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Elephantintheboardroom. All rights reserved.
      </div>
    </div>
  </footer>
  )
}

export default Footer