import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className=" ">
            <header className="fixed top-0 left-0 right-0 flex justify-between bg-gradient-to-br from-purple-800 to-blue-600 items-center p-6 z-10">
        <div className="text-white text-2xl font-bold">DUNKWARE</div>
        <nav className="flex items-center space-x-4">
          <Link href="#" className="text-white hover:underline">Platform</Link>
          <span className="text-white">|</span>
          <Link href="#" className="text-white hover:underline">Solutions</Link>
          <span className="text-white">|</span>
          <Link href="#" className="text-white hover:underline">About</Link>
        </nav>
      </header>
    </div>
  )
}
