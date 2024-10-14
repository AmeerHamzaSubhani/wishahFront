import React from 'react'
import SideBar from '@/components/customComponents/sideBar'
import NavBar from '@/components/customComponents/navBar'
import TableCard from '@/components/customComponents/tableCard'
function layout() {
    const handleToday = () => {
        console.log('Today button clicked');
    }
    const handleMonth = () => {
        console.log('Month button clicked');
    }
    const sampleData = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        // Add more sample data as needed
      ];
      
      const sampleColumns = [
        { header: 'ID', accessor: 'id' },
        { header: 'Name', accessor: 'name' },
        { header: 'Email', accessor: 'email' },
      ];
  return (
    <div className="flex gap-3">
        <div className="">
        <SideBar/>
        </div>
        <div className="flex flex-col " style={ {width:"calc(100% - 248px)"}}>
        <NavBar/>
        <div>
            <TableCard  sampleColumns={sampleColumns} sampleData={sampleData}/>
        </div>
            
        </div>

    </div>
  )
}

export default layout