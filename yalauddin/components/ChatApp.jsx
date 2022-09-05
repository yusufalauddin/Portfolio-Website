import Image from "next/image"
import Link from "next/link"
import ProjectImage from "./ProjectImage"
export default function ChatApp() {
    return <div className="py-8">
        <div className="flex justify-center w-full h-screen text-black">
        <div className="flex justify-center items-center flex-col space-y-5">
        <div className="flex flex-col items-center mx-auto space-y-5">
            <h1 className="antialiased font-bold font-sans">Java Chat Application</h1>
            <p>Java / CSS / FXML</p>
        </div>

        <div className="flex items-center justify-center  text-center flex-col text-[10px] sm:text-[20px] mx-auto max-w-[800px]">
            <p className="font-bold">Simple Java program where clients can communicate with each other when connected to a server. Users can message an individual, a select group, or a whole group.</p>
        </div>

        <div className="flex flex-col space-y-10 md:flex-row justify-center items-center md:space-x-10 md:space-y-0">
        <a target='_blank' rel="noreferrer" href='https://github.com/yusufalauddin/Client-Server-Chat-Application'>
        <div className="flex justify-center w-[180px] h-[45px] rounded-md items-center shadow-xl select-none bg-[#0000FF] hover:scale-105 ease in duration-500 cursor-pointer">
            <div className="flex justify-center text-center items-center"> 
            
            <p className="font-bold text-white">Github</p>
            
            </div>
        </div>
        </a>        
        </div>
        
        </div>
    </div>


    </div>
}