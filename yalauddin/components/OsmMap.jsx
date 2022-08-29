import Image from "next/image"
import ProjectImage from "./ProjectImage"
export default function OsmMap() {
    return <div className="py-8">
        <div className="flex justify-center w-full h-screen text-black">
        <div className="flex justify-center items-center flex-col space-y-5">
        <div className="flex flex-col items-center mx-auto">
            <h1 className="antialiased font-bold font-sans">Closest Building App</h1>
            <p>C++</p>
        </div>

        <div className="flex items-center justify-center  text-center flex-col text-[10px] sm:text-[20px] mx-auto max-w-[800px]">
            <p className="font-bold">C++ program that finds the closest meetup destination between two different buildings. Building data is extracted from .osm file

</p>
        </div>

        <div className="flex flex-col space-y-10 md:flex-row justify-center items-center md:space-x-10 md:space-y-0">
        <a target='_blank' rel="noreferrer" href='https://github.com/yusufalauddin/Closest-Building-OSM'>
        <div className="flex justify-center w-[180px] h-[45px] rounded-md items-center shadow-xl select-none bg-[#300A24]">
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