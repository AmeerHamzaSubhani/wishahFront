import React from 'react'
import EditIcon from '@/assets/editIcon';
import DeleteIcon from '@/assets/deleteIcon';
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "../ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Input } from '../ui/input';
import { Card } from '../ui/card';
  const colData = ['Service Name',  'Service Price', 'Required Therapists', 'Option'];
  interface TableWithIconProps {
    handleEdit: () => void; 
    handleDelete: () => void; 
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
            <TableCell className="flex ml-2 space-x-2 text-center justify-center">
                <div className="div" onClick={() => handleEdit(service)}>
                   


                    <Dialog>
          <DialogTrigger asChild>
          <div className="div">
               <EditIcon />
          </div>
          </DialogTrigger>
          <DialogPortal>
            <DialogOverlay />
             <DialogContent className="min-w-[450px] max-w-[730px] p-6">
              <DialogHeader>
                <DialogTitle className="text-2xl text-[#F05F97]">
                   Edit Services
                </DialogTitle>
                <Separator
                  className="bg-[#D6D7D8]"
                  orientation="horizontal"
                  decorative={true}
                />
              </DialogHeader>

              <form className="flex flex-col space-y-4">
                <div className="flex justify-between mb-6">
                  <div className="flex flex-col justify-start max-w-[302px]">
                    <span className="block text-sm font-bold text-gray-700">
                      Service Name:
                    </span>
                    <Input
                      type="text"
                      placeholder="Category Name"
                      value={service.serviceName}
                      // onChange={(e) => setServiceName(e.target.value)}
                      // className={`mt-3 w-[302px] ${
                      //   serviceNameError ? "border-red-500" : ""
                      // }`}
                    />
                  </div>

                  <div className="flex flex-col justify-start max-w-[302px]">
                    <span className="block text-sm font-bold text-gray-700">
                      Required Therapists:
                    </span>
                    <Input
                      type="text"
                      placeholder="Enter number of therapists required"
                      value={service.reqTherapist}
                      // onChange={(e) =>
                      //   setRequiredTherapists(parseInt(e.target.value))
                      // }
                      // className={`mt-3 w-[302px] ${
                      //   requiredTherapistsError ? "border-red-500" : ""
                      // }`}
                    />
                  </div>
                </div>
                <div className="block text-sm font-bold text-gray-700">
                  Service Duration(s):
                </div>
                <div className="flex justify-between">
                  <Card className="flex justify-between w-[665px] p-4 min-h-[115px]">
                    <div>
                      <span className="block text-sm font-bold text-gray-700">
                        Duration (in minutes)
                      </span>
                      <Input
                        type="text"
                        placeholder="Enter Time Slot"
                        value={service.duration}
                        // onChange={(e) => setDuration(e.target.value)}
                        // className={`mt-3 w-[302px] ${
                        //   durationError ? "border-red-500" : ""
                        // }`}
                      />
                    </div>

                    <div>
                      <span className="block text-sm font-bold text-gray-700">
                        Price:
                      </span>
                      <Input
                        type="text"
                        placeholder="Enter price"
                        value={service.price.toFixed(2)}
                        // onChange={(e) => setPrice(parseInt(e.target.value))}
                        // className={`mt-3 w-[302px] ${
                        //   priceError ? "border-red-500" : ""
                        // }`}
                      />
                    </div>
                  </Card>
                </div>
              </form>

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline" className="bg-black text-white">
                    Close
                  </Button>
                </DialogClose>
                <Button
                  // onClick={handleSaveChanges}
                  className="bg-green-500 hover:bg-green-600 text-white"
                >
                  Save Changes
                </Button>
              </DialogFooter>
            </DialogContent> 
          </DialogPortal>
        </Dialog>
                </div>
                <div className="div"  onClick={() => handleDelete(service)}
                  >
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