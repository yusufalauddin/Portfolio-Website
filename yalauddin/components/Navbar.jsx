import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import {useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

export default function Navbar() {

    const [bar,setBar] = useState(false)

    const handleBar = () => {
        if (!bar) {
            setBar(true)
        } else {
            setBar(false)
        }
    }
    return (
        <div className="fixed w-full h-[100px] shadow-xl z-[100] bg-[#CF5260]">
            <div className="flex justify-between items-center w-full h-full px-2">
            
            <Link href='/'>
            <Image className='cursor-pointer' src='/src/logo.png' height='100' width='250'></Image>
            </Link>

            <div>
                <ul className="hidden md:flex space-x-4 select-none">
                <Link href='/'>
                    <li>Home</li>
                </Link>
                <Link href='/#about'>
                    <li>About</li>
                </Link>

                <Link href='/#skills'>
                    <li>Skills</li>
                </Link>

                <Link href='/#projects'>
                    <li>Projects</li>
                </Link>
                <Link href='/#contact'>
                    <li>Contact</li>
                </Link>
                </ul>
            </div>
            <div onClick={handleBar} className="md:hidden cursor-pointer">
                <AiOutlineMenu size='30'></AiOutlineMenu>
            </div>
            </div>

        <div className={bar ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/40" :''}>
            <div className={bar ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500 bg-[#CF5260]":"fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500 bg-[#CF5260]"}>
            <div>
                <div className="flex justify-between">
                    <img className = 'h-20 w-250 md:h-100'src='/src/logo.png'></img>
                    
                    <div onClick={handleBar} className="py-11 rounded-full cursor-pointer">
                    <AiOutlineClose/>
                    </div>
                </div>
                
                <div className="flex flex-col items-center text-center">
                    <ul>
                        <Link href='/'>
                            <li onClick={handleBar} className="py-2">Home</li>
                        </Link>

                        <Link href='/#about'>
                            <li onClick={handleBar} className="py-2">About</li>
                        </Link>

                        <Link href='/#skills'>
                            <li onClick={handleBar} className="py-2">Skills</li>
                        </Link>

                        <Link href='/#projects'>
                            <li onClick={handleBar} className="py-2">Projects</li>
                        </Link>

                        <Link href='/#contact'>
                            <li onClick={handleBar} className="py-2">Contact</li>
                        </Link>
                    </ul>
                </div>
             
                
            </div>

            </div>
            
        </div>

        </div>
    )
}