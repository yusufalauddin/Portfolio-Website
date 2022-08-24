export default function Skills() {
    return <div id='skills' className="w-full lg:h-screen p-2 text-center text-black py-28">
    <div className="space-y-10">
        <h1 className="font-extralight select-none">Skills</h1>

        
    <div className="flex justify-center items-center lg:space-x-10 lg:flex-row flex-col">
        <ul className="flex justify-center items-center space-y-10 flex-col">
            <li className="cursor-default hover:scale-105 ease in duration-500 w-[225px] h-[65px] md:w-[450px] md:h-[130px] items-center flex justify-center shadow-black shadow-md bg-gray-700 rounded-lg">
                <div>
                    <div className="flex flex-row justify-center items-center space-x-5">
                        <img src='/src/React-icon.svg.png' className="h-[52.5px] w-[65px]md:h-[100px] md:w-[60px] "></img>
                        <h1 className="text-white text-[32px] sm:text-[32px] md:text-[64px]">React.js</h1>
                    </div>
                </div>
            </li>

            <li className="cursor-default hover:scale-105 ease in duration-500 w-[225px] h-[65px] md:w-[450px] md:h-[130px] items-center flex justify-center shadow-black shadow-md bg-white rounded-lg">
                <div>
                    <div className="flex flex-row justify-center items-center space-x-5">
                        <img src='/src/java-logo-1.png' className="h-[52.5px] w-[60px] md:h-[105px] md:w-[120px] "></img>
                        <h1 className="text-[#B43B36]">Java</h1>
                    </div>
                </div>
            </li>

            <li className="cursor-default hover:scale-105 ease in duration-500 w-[225px] h-[65px] md:w-[450px] md:h-[130px] items-center flex justify-center shadow-black shadow-md bg-[#262D3A] rounded-lg">
                <div>
                    <div className="flex flex-row justify-center items-center space-x-5">
                        <img src='/src/ISO_C++_Logo.svg.png' className="h-[52.5px] w-[50px] md:h-[105px] md:w-[100px] "></img>
                        <h1 className="text-white font-bold">C++</h1>
                    </div>
                </div>
            </li>
        </ul>
        <br className="lg:hidden"></br>
        <ul className="flex justify-center items-center space-y-10 flex-col">
            <li className="cursor-default hover:scale-105 ease in duration-500 w-[225px] h-[65px] md:w-[450px] md:h-[130px] items-center flex justify-center shadow-black shadow-md bg-[#F0DB4F] rounded-lg">
                <div>
                    <div className="flex flex-row justify-center items-center space-x-5">
                        <img src='/src/189aa059.png' className="h-[40px] w-[40px] md:h-[100px] md:w-[100px] "></img>
                        <h1 className="text-[#323330] text-[32px] sm:text-[32px] md:text-[64px]">Javascript</h1>
                    </div>
                </div>
            </li>

            <li className="cursor-default hover:scale-105 ease in duration-500 w-[225px] h-[65px] md:w-[450px] md:h-[130px] items-center flex justify-center shadow-black shadow-md bg-[#83CD29] rounded-lg">
                <div>
                    <div className="flex flex-row justify-center items-center space-x-5">
                        <img src='/src/nodejs-512.png' className="h-[67.5px] w-[75px] md:h-[135px] md:w-[150px] "></img>
                        <h1 className="text-white text-[32px] sm:text-[32px] md:text-[64px]">Node.js</h1>
                    </div>
                </div>
            </li>

            <li className="cursor-default hover:scale-105 ease in duration-500 w-[225px] h-[65px] md:w-[450px] md:h-[130px] items-center flex justify-center shadow-black shadow-md bg-white rounded-lg">
                <div>
                    <div className="flex flex-row justify-center items-center space-x-5">
                        <img src='/src/CSS3_logo.svg.png' className="h-[52.5px] w-[50px] md:h-[105px] md:w-[100px] "></img>
                        <h1 className="text-black font-bold">CSS</h1>
                    </div>
                </div>
            </li>
        </ul>

    </div>
    </div>
    </div>
}