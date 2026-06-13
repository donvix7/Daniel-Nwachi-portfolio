import { Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="p-5 sm:p-20 border-t border-gray-300">
        <div className="flex sm:justify-between items-center gap-10">
          <div className="font-bold text-md uppercase">Daniel Nwachi.</div>
          <p className="font-body-lg text-body-lg text-slate-500">© 2026 Daniel Nwachi. Built with Utility</p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
            <Link href="https://www.linkedin.com/in/danielnwachi/" className="text-secondary hover:text-primary transition-colors font-body-lg text-body-lg" >LinkedIn</Link>
            <Link href="https://github.com/donvix7" className="text-secondary hover:text-primary transition-colors font-body-lg text-body-lg">GitHub</Link>
            <Link href="#" className="text-secondary hover:text-primary transition-colors font-body-lg text-body-lg"><Mail/></Link>
          </div>
        </div>
      </footer>
   
  )
}

export default Footer