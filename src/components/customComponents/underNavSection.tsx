import React from 'react'
import { Button } from '@/components/ui/button'


function underNavSection() {
  return (
    <div className='h-[148px] bg-gradient-to-b from-[#F05F97] to-[#F5A2C8]'>
      <div className='flex justify-between items-center p-10'>
         <div className='text-white text-2xl font-bold'>
         Appointment Booking Dashboard
         </div>
         <div>
         <Button className=" bg-[#8BC152] hover:bg-[#ffffff] gap-x-3" size="default" variant='default' >Add New Booking </Button>
         </div>
      </div>      
    </div>
  )
}

export default underNavSection