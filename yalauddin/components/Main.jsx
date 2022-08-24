import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineLinkedin,AiOutlineGithub,AiOutlineMail} from 'react-icons/ai'

export default function Main() {
    return <div id='main' className="top-0 pt-16 mx-auto w-full h-screen  text-center flex items-center justify-center flex-col space-y-3 md:space-y-0 md:flex-row text-black select-none md:space-x-10">
        <div>
            <div>
                <h1 className='font-sans font-bold text-[42px] md:text-[74px]'>Hello,</h1>
                <p className="font-sans font-bold text-[35px] md:text-[60px]">I am <span className="text-[#CF5260]">Yusuf Alauddin.</span></p>
                <p className='font-sans font-thin italic text-[35px] md:text-[30px]'>Full Stack Developer</p>
                <br></br>
            <div className='flex flex-row mx-auto'>
                <div className='bg-gray-200  w-[60px] rounded-full overflow-auto shadow-md shadow-black cursor-pointer mx-auto hover:scale-105 ease in duration-500'>
                    <div className='flex justify-center items-center '>
                        <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/yusuf-alauddin-0883871a3'>
                        <AiOutlineLinkedin  className=' h-[50px] w-[50px]'></AiOutlineLinkedin>
                        </a>
                    </div>
                </div>

                <div className='bg-gray-200  w-[60px] rounded-full overflow-auto shadow-md shadow-black cursor-pointer mx-auto hover:scale-105 ease in duration-500'>
                    <div className='flex justify-center items-center '>
                        <a target='_blank' rel="noreferrer" href='https://www.github.com/yusufalauddin'>
                        <AiOutlineGithub  className=' h-[50px] w-[50px]'></AiOutlineGithub>
                        </a>
                    </div>
                </div>

                <div className='bg-gray-200  w-[60px] rounded-full overflow-auto shadow-md shadow-black cursor-pointer mx-auto hover:scale-105 ease in duration-500'>
                    <div className='flex justify-center items-center '>
                        <Link href='/#contact'>
                        <AiOutlineMail  className=' h-[50px] w-[50px]'></AiOutlineMail>
                        </Link>
                    </div>
                </div>

            </div>
                


            </div>
           
        </div>

        <div>
            <img src='/src/cartoonyusuf.png' className='shadow-md shadow-black h-[200px] w-[200px] md:h-[400px] md:w-[400px] md:min-w-[400px] rounded-full hover:scale-105 ease in duration-500'></img>
        </div>

        </div>
        
}