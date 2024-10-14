import React from 'react'
import SearchIcon from '@/assets/searchIcon'
import BellIcon from '@/assets/bellIcon'
import Ellipse from '@/assets/svgs/Ellipse.svg'
import Image from 'next/image'
function navBar() {
    const valueToDisplay = 'Dashboard'
  return (
    <div className='h-[100px] w-full flex justify-between p-8 z-40 bg-white border shadow-md'>
        <div className="text-[#F05F97] font-bold text-md">
           Home | {valueToDisplay}
        </div>
        <div className="flex justify-between items-center gap-x-6">
        <div className="div">
            <SearchIcon/>
            </div>
            <div className="div">
            <BellIcon/>
        </div>
        <div className="rounded-full">
            <Image src={Ellipse} alt="Ellipse" />
        </div>
        </div>
    </div>
  )
}

export default navBar