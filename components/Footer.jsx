import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="p-10 border-t border-gray-300">
        <div className="flex justify-between items-center gap-10">
          <div className="font-bold text-2xl uppercase">Daniel Nwachi.</div>
          <p className="font-body-lg text-body-lg text-secondary">© 2026 Daniel Nwachi. Built with Utility</p>
          <div className="flex gap-6">
            <Link href="https://www.linkedin.com/in/danielnwachi/" className="text-secondary hover:text-primary transition-colors font-body-lg text-body-lg" >LinkedIn</Link>
            <Link href="https://github.com/donvix7" className="text-secondary hover:text-primary transition-colors font-body-lg text-body-lg">GitHub</Link>
            <Link href="#" className="text-secondary hover:text-primary transition-colors font-body-lg text-body-lg">Email</Link>
          </div>
        </div>
      </footer>
  
  )
}

export default Footer