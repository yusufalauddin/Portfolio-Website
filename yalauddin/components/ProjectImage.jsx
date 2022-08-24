import Image from "next/image"

export default function ProjectImage() {
    return <div className="w-full ">
        <div className="w-screen h-[30vh] lg:[40vh] relative">
            <div className="absolute top-0 left-0 w-full h-[50vh] lg:h-screen  bg-black/80 z-10">
                <Image src='/src/smartpassword.png' className="opacity-50 absolute z-1" objectFit="cover" layout="fill"></Image>
            </div>
        </div>
    </div>
}