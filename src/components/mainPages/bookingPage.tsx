import React from 'react'
import TableWithIconComponent from '@/components/customComponents/tableWithIcons'
import UnderNavWithSearch from '@/components/customComponents/underNavWithSearch'
import InformationSection from '@/components/customComponents/informationSection'
import AddBookingIcon from '@/assets/addBookingIcon'
import Footer from '@/components/customComponents/footer'
function bookingPage() {
    const handleEdit = () => {}
    const handleDelete = () => {}
  return (
    <div className='flex flex-col justify-center items-center w-full h-full ml-20'>
        <InformationSection title={"Booking"}  Icon={<AddBookingIcon/>}/>
        <UnderNavWithSearch />
        <TableWithIconComponent  handleDelete={handleDelete} handleEdit={handleEdit} />
        <Footer />
    </div>
  )
}

export default bookingPage