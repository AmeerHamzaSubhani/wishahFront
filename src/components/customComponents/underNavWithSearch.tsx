import React from 'react'
import { Input } from '@/components/ui/input'
import SearchIcon from '@/assets/searchIcon'
function underNavWithSearch() {
  return (

    <div className='h-[100px] w-full bg-gradient-to-b from-[#F05F97] to-[#F5A2C8] rounded-xl ml-10 my-3'>
      <div className='flex flex-col p-3'>
         <div className='text-white text-xs font-bold mb-2 p-2'>
         What are you looking for?</div>
         <div className='flex items-center gap-x-6 w-full'>

         <Input type="text" 
              placeholder="Search for title, Category name etc" 
              className=' relative bg-white w-full h-[35px] rounded-xl p-x-20'
            //   value={password}
            //   onChange={(e) => setPassword(e.target.value)} 
            />
            <div className="absolute ml-1">

         <SearchIcon   iconWidth={"14px"} iconHeight={"14px"} color={"#8BC152"} />
            </div>
         </div>
      </div>      
    </div>
  )
}

export default underNavWithSearch