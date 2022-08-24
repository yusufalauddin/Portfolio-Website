export default function About() {
    return <div id='about' className="w-full md:h-screen text-center p-2 text-black py-16">
        <div className="flex flex-col py-10">
            
            <h1 className="font-extralight select-none mx-auto">About</h1>
            <br></br>
            <div className="flex justify-center items-center mx-auto">
                <img src="/src/Remini20220221110947279.jpg" className="w-[130px] h-[160px] rounded-md sm:w-[160px] sm:h-[200px] md:w-[192px] md:h-[240px] lg:w-[240px] lg:h-[300px] xl:w-[272px] xl:h-[340px] md:hover:scale-105 ease in duration-500 "></img>
            </div>
            <div className="py-10">
            <p className='font-light mx-auto text-[22px] '>
            I am Yusuf, a junior <span className=" font-semibold text-red-400">computer science</span> major at the <span className=" font-semibold text-red-400">University of Illinois Chicago.</span>
            </p>
            <p className='font-light mx-auto text-[22px] py-10'>
            My concentration is in <span className=" font-semibold text-red-400">software engineering,</span> and I have developed <span className=" font-semibold italic text-red-400">front-end, back-end,</span> and <span className=" font-semibold italic text-red-400">full-stack</span> project applications. 
            </p>
            <p className='font-light mx-auto text-[22px] py-0'>
            Below you will find <span className=" font-semibold text-red-400">my listed skills</span> as well as a <span className=" font-semibold text-red-400">collection of my projects.</span>
            </p>
            </div>
            
            
           
        </div>
    </div>
}