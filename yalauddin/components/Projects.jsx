import Link from "next/link"

export default function Projects() {
    return <div id='projects' className="w-full h-full text-center flex flex-col justify-center text-black py-28">
        <div className="space-y-10">
            <h1 className="font-extralight select-none">Projects</h1>

            <div className='flex justify-center items-center flex-row'>
                <div className="flex justify-center items-center flex-col">
                    <ul className="space-y-10 items-center flex flex-col">
                        <li className="w-[305px] h-[180px] sm:w-[366px] sm:h-[216px] md:w-[427px] md:h-[252px] lg:w-[488px] lg:h-[288px] group cursor-default flex space-y-3 flex-col justify-center items-center text-opacity-0 hover:scale-105 hover:text-opacity-100 rounded-md bg-yalauddin-logo bg-no-repeat bg-contain bg-center hover:bg-none text-white hover:bg-[#BA5A62] hover:bg-opacity-1000 ease in duration-200 shadow-xl shadow-slate-500">
                            <h1 className="font-sans font-semibold antialiased select-none">yalauddin</h1>
                            <Link href='/yalauddin'>
                            <div className="hover:scale-105 cursor-pointer flex justify-center items-center bg-gray-100 w-[140px] h-[50px] rounded-xl opacity-0 group-hover:opacity-100 ease in duration-200 group-hover:shadow-sm hover:shadow-slate-500">
                                <p className="text-[#BA5A62] font-bold">View</p>
                            </div>
                            </Link>
                        </li>

                        <li className="w-[305px] h-[180px] sm:w-[366px] sm:h-[216px] md:w-[427px] md:h-[252px] lg:w-[488px] lg:h-[288px] group cursor-default flex space-y-3 flex-col justify-center items-center text-opacity-0 hover:scale-105 hover:text-opacity-100 rounded-md bg-chat-app bg-no-repeat bg-cover bg-center hover:bg-none text-white hover:bg-[#FF7F50] hover:bg-opacity-1000 ease in duration-200 shadow-xl shadow-slate-500">
                            <h1 className="font-sans font-semibold antialiased select-none">Java Chat App</h1>
                            <Link href='/chatapplication'>
                            <div className="hover:scale-105 cursor-pointer flex justify-center items-center bg-[#0000FF] w-[140px] h-[50px] rounded-xl opacity-0 group-hover:opacity-100 ease in duration-200 group-hover:shadow-sm hover:shadow-slate-500">
                                <p className="text-white font-bold">View</p>
                            </div>
                            </Link>
                        </li>

                        <li className="w-[305px] h-[180px] sm:w-[366px] sm:h-[216px] md:w-[427px] md:h-[252px] lg:w-[488px] lg:h-[288px] group cursor-default flex space-y-3 flex-col justify-center items-center text-opacity-0 hover:scale-105 hover:text-opacity-100  rounded-md bg-smart-password bg-no-repeat bg-cover bg-center hover:bg-none text-white hover:bg-red-500 hover:bg-opacity-1000 ease in duration-200 shadow-xl shadow-slate-500">
                            <h1 className="font-sans font-thin antialiased select-none">SmartPassword</h1>
                        <Link href='/passwordmanager'>    
                            <div className="hover:scale-105 cursor-pointer flex justify-center items-center bg-gray-100 w-[140px] h-[50px] rounded-xl opacity-0 group-hover:opacity-100 ease in duration-200 group-hover:shadow-sm hover:shadow-slate-500">
                                <p className="text-red-500 font-bold">View</p>
                            </div>
                        </Link>
                            
                        </li>
                    </ul>
                </div>
                
            </div>

        </div>

    </div>
}