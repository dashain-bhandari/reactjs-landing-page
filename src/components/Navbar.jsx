import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { navItems } from '../constants'
import { Menu } from 'lucide-react'
const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
    const toggleNav = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }
    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className='container mx-auto px-4 relative text-sm'>
                <div className="flex justify-between items-center space-x-12">

                    <div className="flex items-center flex-shrink-0">

                        <img src={logo} className='h-10 w-10 mr-2' alt="logo"></img>
                        <span className='text-xl tracking-tight'>
                            VirtualR
                        </span>
                    </div>
                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        {
                            navItems.map((item) => (
                                <li>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='hidden lg:flex justify-content items-center space-x-12'>
                        <a href="#" className='py-2 px-3 border rounded-md'>Sign in</a>
                        <a href="#" className='py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-300 rounded-md'>Create an account</a>
                    </div>
                    <div className="lg:hidden max-md:flex justify-between items-center">
                        <button onClick={toggleNav}>
                            {
                                mobileDrawerOpen ? "X" : <Menu />
                            }
                        </button>
                    </div>
                </div>
                {
                    mobileDrawerOpen &&

                   (
                    <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                             <ul className=''>
                        {
                            navItems.map((item) => (
                                <li className='py-4'>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='flex lg:hidden  space-x-12'>
                        <a href="#" className='py-2 px-3 border rounded-md'>Sign in</a>
                        <a href="#" className='py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-300 rounded-md'>Create an account</a>
                    </div>
                        </div>
                   )

                }
            </div>

        </nav>
    )
}

export default Navbar