import {FaDiscord} from "react-icons/fa";
import {AiOutlineMail} from 'react-icons/ai'

export default function Contact() {
    return <div id='contact' className="w-full h-[600px] p-2 text-black py-16">
         <div className="flex flex-col py-10 space-y-10">

            <h1 className="font-extralight select-none mx-auto">Contact</h1>

            <div className="flex items-center justify-center space-x-4 mx-auto">
                <AiOutlineMail className="sm:h-[50px] sm:w-[50px]"></AiOutlineMail>
                <p className="text-[12px] sm:text-[24px]">theyusufalauddin@gmail.com</p>
            </div>
            
            <div className="flex items-center text-center justify-center space-x-4 mx-auto">
                <FaDiscord className="sm:h-[50px] sm:w-[50px]"></FaDiscord>
                <p className="sm:text-[24px]">YusufA#3340</p>
            </div>

         </div>


    </div>
}