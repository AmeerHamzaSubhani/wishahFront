import React from 'react'
import TableComponent from '@/components/customComponents/table'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectItem,
  } from '@/components/ui/select'
  interface TableCardProps {
    title: string; // Card title
    sampleColumns: Array<{ header: string; accessor: string }>; // Column definitions for the table
    sampleData: Array<Record<string, string>>; // Row data for the table
    selectOptions: Array<{ label: string; value: string }>; // Options for the select dropdown
    buttonLabels: { today: string; month: string }; // Button labels
  }
  
  const TableCard: React.FC<TableCardProps> =({
    sampleColumns,
    sampleData,
  }) =>{
  return (
    <Card className='w-[620px] h-[384px]'>
    <CardHeader>
     <CardTitle className='flex justify-between items-center'> 
      <div className="div">Booking Info </div>
      <div className="flex  gap-x-4">
      <Select>
    <SelectTrigger className="w-[150px]">
      <SelectValue placeholder="All Except Done" />
    </SelectTrigger> 
    <SelectContent>
      <SelectGroup>
        <SelectItem className='text-[#8BC152]' value="Active">Active</SelectItem>
        <SelectItem  className='text-[#F9AD4B]' value="Pending">Pending</SelectItem>
        <SelectItem  className='text-[#F05F97]' value="Cancel">Cancel</SelectItem>
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
  )
}

export default TableCard