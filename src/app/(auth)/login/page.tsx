import React from 'react'
import MainIcon from "@/assets/mainIcon";
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import SideImg from "@/assets/svgs/sideImg.svg";
function page() {
  return (
    <div className=' flex w-full'>
         <div className="flex w-[50%]">
         <div className="relative w-full h-screen">
        <Image 
          src={SideImg} 
          alt="wishah sideImg" 
          layout="fill" // Use layout fill for the image to cover the div
          objectFit="cover" // Ensures the image covers the div without distortion
        />
      </div>
      <div className="absolute w-1/2 h-screen bg-cover "> 
      </div>
         </div>
         <div className="flex flex-col w-[50%] h-screen bg-[#F05F97] items-center justify-center space-y-10">
          <div className="div">
            <MainIcon />
          </div>
          <div className=" flex w-[414px] items-center justify-center">
             <h3 className='text-4xl text-white font-bold'>
             Welcome to SPA
             CMS
             </h3>
          </div>
          <div className="div">
            <div className="div">
             <Input>
             </Input>
            </div>
            <div className="div">
            <Input>
            </Input>
            </div>
          </div>
          <div className="div"></div>
         </div>
    </div>
  )
}

export default page