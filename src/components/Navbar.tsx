import Link from 'next/link'
import React from 'react'
import logo from '@/assets/icons/logo.svg'
import Image from 'next/image'

function Navbar() {
    return (
      
        <div className='bg-[#0E041D]'> 
            
            <div className='container mx-auto  text-[white] flex justify-between items-center pt-[20px] pb-[20px]'>
                
                <Image src={logo} alt='logo' />

                <ul className='flex gap-[50px] font-medium '>

                    <Link href={"/"}>
                        <li>Bosh sahifa</li>
                    </Link>
                    

                    <Link href={"/Portfolio"}>
                        <li className='cursor-pointer'>Portfolio</li>
                    </Link>
                    
                    <Link href={"/Xizmatlar"}>
                        <li className='cursor-pointer'>Xizmatlar</li>
                    </Link>

                    <li className='cursor-pointer '>Aloqa</li>
                </ul>
                    <div className='flex gap-[30px]'>
                        <select id="language">
                        <option className='text-[black]' value="1">UZ</option>
                        <option className='text-[black]' value="2">EN</option>
                    </select>
                    
                    <button className="relative px-6 py-3 rounded-lg border border-white/20 
  text-white font-medium bg-white/10 backdrop-blur-md 
  hover:text-black hover:bg-white hover:border-[white] transition duration-200 
  before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
  before:bg-[linear-gradient(to_right,_#000,_white,_#000)] 
  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
  after:bg-[linear-gradient(to_right,_#000,_white,_#000)] 
  overflow-hidden cursor-pointer"
                    >
                        Loyiha bormi?
                    </button>

                    </div>
                
            </div>
    </div>
  )
}

export default Navbar