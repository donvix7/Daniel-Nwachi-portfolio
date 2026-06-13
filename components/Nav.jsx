import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div>
         {/* Top Navigation Bar */}
      <header className="w-full border-b border-slate-200 ">
        <nav className="flex gap-4 px-20 py-4 justify-between items-center">
          <div className="font-bold text-2xl text-slate-900">DANIEL NWACHI.</div>
          <div className="flex gap-10 font-bold">
            <Link href="/" className="font-body-md text-slate-500 hover:text-slate-900 transition-colors cursor-pointer">Home</Link>
            <Link href="/projects" className="font-body-md text-slate-500 hover:text-slate-900 transition-colors cursor-pointer">Projects</Link>
            <Link href="/about" className="font-body-md text-slate-500 hover:text-slate-900 transition-colors cursor-pointer">About</Link>
          </div>
          <button className="bg-primary text-on-primary px-5 py-2 rounded-DEFAULT font-label-sm text-label-sm hover:opacity-90 transition-opacity">
            Contact
          </button>
        </nav>
      </header>
    </div>
  )
}

export default Nav