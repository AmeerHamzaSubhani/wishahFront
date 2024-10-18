import React from 'react'
import EditIcon from '@/assets/editIcon';
import DeleteIcon from '@/assets/deleteIcon';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
const services = [
    {
      name: 'Thai Massage',
      price: 500.00,
      requiredTherapists: 1,
    },
    {
      name: 'Four Hand Massage',
      price: 200.00,
      requiredTherapists: 2,
    },
    {
      name: 'Body Massage',
      price: 800.00,
      requiredTherapists: 1,
    },
    {
      name: 'Hot Oil Massage',
      price: 300.00,
      requiredTherapists: 3,
    },
    {
      name: 'Hot Stone Massage',
      price: 200.00,
      requiredTherapists: 1,
    },
    {
      name: 'Relaxation Massage',
      price: 800.00,
      requiredTherapists: 1,
    },
    {
      name: 'Russian Massage',
      price: 300.00,
      requiredTherapists: 2,
    },
    {
      name: 'Arabic Massage',
      price: 200.00,
      requiredTherapists: 1,
    },
    {
      name: 'Moroccan Bath',
      price: 800.00,
      requiredTherapists: 1,
    },
    {
      name: 'Body Lotion Massage',
      price: 300.00,
      requiredTherapists: 1,
    },
    {
      name: 'Thailand Massage',
      price: 200.00,
      requiredTherapists: 1,
    },
    {
      name: 'Deep Tissue Massage',
      price: 800.00,
      requiredTherapists: 3,
    },
  ];
  const colData = ['Service Name',  'Service Price', 'Required Therapists', 'Option'];
  interface TableWithIconProps {
    handleEdit: (service: typeof services[0]) => void; 
    handleDelete: (service: typeof services[0]) => void; 
    servicesData: [{}];
}
const TableWithIconComponent = ({ handleEdit, handleDelete,servicesData }:TableWithIconProps) => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full ml-10 bg-white rounded-lg">
      <Table>
        <TableHeader>
          <TableRow className="p-4">
            {colData.map((col, index) => (
              <TableHead key={index} className="text-black font-semibold text-center">
                {col}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
    {servicesData?.map((service, index) => (
        <TableRow key={index}>
            <TableCell className='text-center'>{service.serviceName}</TableCell>
            <TableCell className='text-center'>{service.price.toFixed(2)}</TableCell>
            <TableCell className='text-center'>{service.reqTherapist}</TableCell>
            <TableCell className="flex ml-2 space-x-2 text-center">
                <div className="div" onClick={() => handleEdit(service)}>
                    <EditIcon />
                </div>
                <div className="div" onClick={() => handleDelete(service)}>
                    <DeleteIcon />
                </div>
            </TableCell>
        </TableRow>
    ))}
</TableBody>
      </Table>
        </div>
    );
  };
  
  export default TableWithIconComponent;