import React from 'react'
import { Select,SelectTrigger, SelectValue, SelectGroup,SelectItem,SelectContent } from '../ui/select'
import sideFaceR from '@/assets/sideFaceR.svg'
import sideFaceL from '@/assets/sideFaceL.svg'
import Image from 'next/image'
function footer() {
  return (
    <div className='flex justify-end items-center w-full h-[100px] gap-x-2'>
         <div className="text-sm text-black font-semibold ml-2">
         Row per page:
         </div>
         <Select>
    <SelectTrigger className="w-[70px] h-[30px]">
      <SelectValue placeholder="10" />
    </SelectTrigger> 
    <SelectContent>
      <SelectGroup>
        <SelectItem value="10">10</SelectItem>
        <SelectItem value="25">25</SelectItem>
        <SelectItem value="50">50</SelectItem>
        <SelectItem value="100">100</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
         <div className="text-sm text-black">1-06 of 100</div>
         <div className="flex gap-x-4">
         <div className="" onClick={() => {}}>
            <Image src={sideFaceL} alt="sideFaceL" /></div>
         <div className="div" onClick={() => {}}><Image src={sideFaceR} alt="sideFaceR" /></div>
         </div>
    </div>
  )
}

export default footer