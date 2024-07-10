import React from 'react'
import { FloatingNav } from './ui/floating-navbar'
const navItems = [
    {
        name:"Home",
        link:'/'
    },
    {
        name:"About",
        link:'/'
    },
    {
        name:"Connect",
        link:'/'
    },
]
const FloatingNavbar = () => {
  return (
    <>
    <nav>
        <FloatingNav navItems={navItems} className='p-4 hidden md:flex' />
    </nav>
    </>
  )
}

export default FloatingNavbar