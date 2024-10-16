import React from 'react'
import TableWithIconComponent from '@/components/customComponents/tableWithIcons'
import UnderNavWithSearch from '@/components/customComponents/underNavWithSearch' 
import InformationSection from '@/components/customComponents/informationSection'
import AddNoteBookIcon from '@/assets/addNoteBookIcon'
import Footer from '@/components/customComponents/footer'
function servicesPage({handleAddService ,serviceModalOpen,setServiceModalOpen}:{handleAddService:()=>void ,serviceModalOpen:boolean,setServiceModalOpen:any}) {
    const handleEdit = () => {}
    const handleDelete = () => {}
  return (
    <div className='flex flex-col justify-center items-center w-full h-full ml-20' >
        <InformationSection title={"Services"} Icon={<AddNoteBookIcon/>}  handleAdd={handleAddService} serviceModalOpen={serviceModalOpen} setServiceModalOpen={setServiceModalOpen}/>
        <UnderNavWithSearch/>
        <TableWithIconComponent handleDelete={handleDelete} handleEdit={handleEdit}/>
        <Footer />
    </div>
  )
}

export default servicesPage