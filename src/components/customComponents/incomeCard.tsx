import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

function IncomeCard() {
  return (
    <Card className='flex flex-col rounded-lg w-[480px] h-[190px]'>
   <CardHeader>
    <CardTitle className='text-xl'> Total’s Income & other statistics</CardTitle>
   </CardHeader>
   <CardContent>
    <div className='grid grid-cols-2 gap-2'>
    <div className="flex flex-col items-start justify-items-start space-y-4">       
       <div className="flex flex-col items-center justify-center">
         <span className='text-xs font-bold text-[#8BC152]'>Total Income</span>  
         <span className='text-xs'>0.00</span>    

         </div>
       
        <div className="flex flex-col items-center justify-center">
         <span className='text-xs font-bold text-[#F05F97]'>Total Due</span>  
         <span className='text-xs '>0.00</span>    

         </div>
    </div> 

    <div className="flex flex-col items-center justify-items-start space-y-4">       
    <div className="flex flex-col items-center justify-center">
         <span className='text-xs font-bold text-[#8BC152]'>Total Cash Payment</span>   
         <span className='text-xs '>0.00</span>    

        </div>
       <div className="flex flex-col items-center justify-center">
         <span className='text-xs font-bold text-[#F05F97]'>Total Online Payment</span>   
         <span className='text-xs '>0.00</span>    
        </div>
    </div> 
    </div>
   </CardContent>
    </Card>
  )
}

export default IncomeCard