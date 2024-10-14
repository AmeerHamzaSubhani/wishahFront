import React from 'react'
import TableComponent from '@/components/customComponents/table'
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectLabel,
    SelectItem,
    SelectSeparator,
    SelectScrollUpButton,
    SelectScrollDownButton,
  } from '@/components/ui/select'
function tableCard({sampleColumns, sampleData}) {
  return (
    <>
    <Card className='w-[620px] h-[384px]'>
      <CardHeader>
       <CardTitle className='flex justify-between'> 
        <div className="div">Booking Info </div>
        <div className="flex ">
        <Select>
      <SelectTrigger className="w-[100px]">
        <SelectValue placeholder="All Except Done" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">Active</SelectItem>
          <SelectItem value="banana">Pending</SelectItem>
          <SelectItem value="blueberry">Cancel</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
        <Button className=" bg-[#8BC152] hover:bg-[#ffffff] gap-x-3" size="default" variant='default' >Today </Button>
        <Button className=" bg-[#ffffff] hover:bg-[#80c239] gap-x-3" size="default" variant='outline' > Month </Button>
        </div>
         </CardTitle> 
        </CardHeader>
        <CardContent>
      <TableComponent columns={sampleColumns} data={sampleData} />
        </CardContent>
    </Card>
    </>

  )
}

export default tableCard