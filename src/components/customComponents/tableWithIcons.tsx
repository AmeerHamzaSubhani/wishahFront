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
      amenities: ['Amenity 1', 'Amenity 4'],
      price: 500.00,
      requiredTherapists: 1,
    },
    {
      name: 'Four Hand Massage',
      amenities: ['Amenity 2', 'Amenity 4'],
      price: 200.00,
      requiredTherapists: 2,
    },
    {
      name: 'Body Massage',
      amenities: ['Amenity 3', 'Amenity 5'],
      price: 800.00,
      requiredTherapists: 1,
    },
    {
      name: 'Hot Oil Massage',
      amenities: ['Amenity 4', 'Amenity 6'],
      price: 300.00,
      requiredTherapists: 3,
    },
    {
      name: 'Hot Stone Massage',
      amenities: ['Amenity 4'],
      price: 200.00,
      requiredTherapists: 1,
    },
    {
      name: 'Relaxation Massage',
      amenities: ['Amenity 6'],
      price: 800.00,
      requiredTherapists: 1,
    },
    {
      name: 'Russian Massage',
      amenities: ['Amenity 7'],
      price: 300.00,
      requiredTherapists: 2,
    },
    {
      name: 'Arabic Massage',
      amenities: ['Amenity 8', 'Amenity 2'],
      price: 200.00,
      requiredTherapists: 1,
    },
    {
      name: 'Moroccan Bath',
      amenities: ['Amenity 9'],
      price: 800.00,
      requiredTherapists: 1,
    },
    {
      name: 'Body Lotion Massage',
      amenities: ['Amenity 10'],
      price: 300.00,
      requiredTherapists: 1,
    },
    {
      name: 'Thailand Massage',
      amenities: [],
      price: 200.00,
      requiredTherapists: 1,
    },
    {
      name: 'Deep Tissue Massage',
      amenities: ['Amenity 12'],
      price: 800.00,
      requiredTherapists: 3,
    },
  ];

  interface TableWithIconProps {
    handleEdit: () => void;
    handleDelete: () => void;
  }
const TableWithIconComponent = ({ handleEdit, handleDelete }) => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full ml-10 bg-white rounded-lg">
      <Table>
        <TableHeader>
          <TableRow className="p-4">
            <TableHead className="text-black font-semibold">Service Name</TableHead>
            <TableHead className="text-black font-semibold">Amenities</TableHead>
            <TableHead className="text-black font-semibold">Service Price</TableHead>
            <TableHead className="text-black font-semibold">Required Therapists</TableHead>
            <TableHead className="text-black font-semibold">Option</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((service, index) => (
            <TableRow key={index}>
              <TableCell>{service.name}</TableCell>
              <TableCell>{service.amenities.join(', ')}</TableCell>
              <TableCell>{service.price.toFixed(2)}</TableCell>
              <TableCell>{service.requiredTherapists}</TableCell>
              <TableCell className="flex ml-2 space-x-2">
                <div className="div" onClick={handleEdit}>
                    
                    <EditIcon />
                    </div>
                    <div className="div" onClick={handleDelete}>
                <DeleteIcon/>
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