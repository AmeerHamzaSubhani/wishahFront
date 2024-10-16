import React from 'react'
import TableCard from '@/components/customComponents/tableCard'
import UnderNavSection from '@/components/customComponents/underNavSection'
import IncomeCard from '@/components/customComponents/incomeCard'
import TableWithIconComponent from '@/components/customComponents/tableWithIcons'
import ProgressCard from '@/components/customComponents/progressCards'

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
function dashBoardPage() {
  return (
    <div className='flex flex-col relative'>
      <UnderNavSection/>
      <div className="absoulute top-1">
      <ProgressCard  title={'Tototal Income'} count={39} color={'#000000'} percentage={16} />
      </div>
      <div className="grid grid-cols-2">
      <IncomeCard />
      <TableWithIconComponent handleEdit={() => {}} handleDelete={() => {}}/>
      <TableCard sampleData={sampleData} sampleColumns={sampleColumns}/>
      </div>
    </div>
  )
}

export default dashBoardPage