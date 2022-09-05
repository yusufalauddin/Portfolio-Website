import Image from "next/image"
import Link from "next/link"
import ProjectImage from "./ProjectImage"
export default function Portfolio() {
    return <div className="py-8">
        <div className="flex justify-center w-full h-screen text-black">
        <div className="flex justify-center items-center flex-col space-y-5">
        <div className="flex flex-col items-center mx-auto -top-3.5">
            <h1 className="antialiased font-bold font-sans">Portfolio</h1>
            <p>React.js / Next.js / Tailwind CSS</p>
        </div>

        <div className="flex items-center justify-center  text-center flex-col text-[10px] sm:text-[20px] mx-auto max-w-[800px]">
            <p className="font-bold">Yalauddin is the personal website and project hub for Yusuf Alauddin. Here you will find web applications, coding projects, and contact information.</p>
        </div>

        <div className="flex flex-col space-y-10 md:flex-row justify-center items-center md:space-x-10 md:space-y-0">
        <a target='_blank' rel="noreferrer" href='https://github.com/yusufalauddin/Portfolio-Website'>
        <div className="flex justify-center w-[180px] h-[45px] rounded-md items-center shadow-xl select-none bg-[#BA5A62] hover:scale-105 ease in duration-500 cursor-pointer">
            <div className="flex justify-center text-center items-center"> 
            
            <p className="font-bold text-white">Github</p>
            
            </div>
        </div>
        </a>
        <Link href='/#main'>
        <div className="flex justify-center w-[180px] h-[45px] rounded-md items-center shadow-xl select-none bg-[#BA5A62] hover:scale-105 ease in duration-500 cursor-pointer">
            <div className="flex justify-center text-center items-center"> 

            <p className="font-bold text-white">Demo</p>

            </div>
        </div>
        </Link>
        
        </div>
        
        </div>
    </div>


    </div>
}