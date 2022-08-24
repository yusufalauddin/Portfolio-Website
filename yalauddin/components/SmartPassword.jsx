import Image from "next/image"
import ProjectImage from "./ProjectImage"
export default function SmartPassword() {
    return <div className="py-8">
        <div className="flex justify-center w-full h-screen text-black">
        <div className="flex justify-center items-center flex-col space-y-5">
        <div className="flex flex-col items-center mx-auto">
            <h1 className="antialiased font-bold font-sans">Smart Password</h1>
            <p>Node.js / React.js / Express.js / MongoDB</p>
        </div>

        <div className="flex items-center justify-center  text-center flex-col text-[10px] sm:text-[20px] mx-auto max-w-[800px]">
            <p className="font-bold">Smart Password is a secure password manager made to store your passwords on the cloud. The application UI was created using React and CSS styling. Users can register and login to the password manager system, 
                where their passwords are hashed and securely stored in a database. User logins utilize JWT Authentication to ensure each session will have a unique and limited access tokens. 
                Currently, the custom vault api to safely hold passwords is being developed.</p>
        </div>

        <div className="flex flex-col space-y-10 md:flex-row justify-center items-center md:space-x-10 md:space-y-0">
        <div className="flex justify-center w-[180px] h-[45px] rounded-md items-center shadow-xl select-none bg-red-500">
            <div className="flex justify-center text-center items-center"> 

            <p className="font-bold text-white">Code (coming soon)</p>

            </div>
        </div>

        <div className="flex justify-center w-[180px] h-[45px] rounded-md items-center shadow-xl select-none bg-red-500">
            <div className="flex justify-center text-center items-center"> 

            <p className="font-bold text-white">Demo (coming soon)</p>

            </div>
        </div>
        </div>
        
        </div>
    </div>


    </div>
}