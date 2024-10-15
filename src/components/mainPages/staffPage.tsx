import React from 'react'
import TableWithIconComponent from '@/components/customComponents/tableWithIcons'
import UnderNavWithSearch from '@/components/customComponents/underNavWithSearch'
import InformationSection from '@/components/customComponents/informationSection'
import AddBagIcon from '@/assets/addBagIcon'
import Footer from '@/components/customComponents/footer'
function staffPage() {
    const handleEdit = () => {}
    const handleDelete = () => {}
  return (
    <div className='flex flex-col justify-center items-center w-full h-full ml-20'>
        <InformationSection title={"Staff"} Icon={<AddBagIcon/>} />
        <UnderNavWithSearch />
        <TableWithIconComponent handleDelete={handleDelete} handleEdit={handleEdit} />
        <Footer />
    </div>
  )
}

export default staffPage