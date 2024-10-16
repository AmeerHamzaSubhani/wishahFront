import React from "react";
import { Separator } from "../ui/separator";
import {  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription, } from "../ui/dialog";
  import { Input } from '@/components/ui/input'; // Assuming you have an Input component
import { Button } from '@/components/ui/button'; // Assuming you have a Button component
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
function informationSection({
  title,
  Icon,
  handleAdd,
  serviceName, setServiceName,requiredTherapists, setRequiredTherapists,amenities, setAmenities,duration, setDuration,price, setPrice, setServiceModalOpen 
}:any) {

  const handleSaveChanges = () => {
    // Handle form submission logic here
    console.log({
        serviceName,
        requiredTherapists,
        amenities,
        duration,
        price,
    });
    setServiceModalOpen(true);
};
  return (
    <div className="flex flex-row justify-between items-center w-full space-x-4  space-y-5 py-2 ml-10 bg-transparent my-6">
      <div className="flex flex-col">
        <div className="text-2xl font-semibold"> {title} Information</div>
        <div className="flex justify-center items-center w-[120px] h-[21px] rounded-md border-2 border-[#000000] mt-4">
          <div className="flex w-[25px] text-xs mr-1 text-black">PDF</div>
          <Separator
            className=" text-black"
            orientation="vertical"
            decorative={true}
          />
          <div className="flex w-[25px] text-xs text-black mx-2">Print</div>
          <Separator
            className=" text-black"
            orientation="vertical"
            decorative={true}
          />
          <div className="flex  w-[25px] ml-1 text-xs text-black">Execl</div>
        </div>
      </div>
      <div className="" onClick={handleAdd}>
        <Dialog >
            <DialogTrigger asChild>
            <Button
              className="flex flex-row justify-center items-center  bg-[#8BC152] hover:bg-[#80c239] gap-x-3"
              size="lg"
              variant="default"
            >
              <div className="div">{Icon}</div>
              <div className="div">{title}</div>
            </Button>
            </DialogTrigger>
            <DialogPortal>
                <DialogOverlay />
                <DialogContent className="min-w-[450px] max-w-[730px] p-6">
                    <DialogHeader>
                        <DialogTitle>Add New Services</DialogTitle>
                        <DialogDescription>
                            Fill in the details for the new service.
                        </DialogDescription>
                    </DialogHeader>

                    <form className="space-y-4">
                      <div className="flex justify-between items-center">

                        <div className="flex flex-col justify-start  items-center max-w-[302px]">
                            <label className="text-sm font-medium text-gray-700">Service Name:</label>
                            <Input
                                type="text"
                                placeholder="Category Name"
                                value={serviceName}
                                onChange={(e) => setServiceName(e.target.value)}
                                className="mt-1 max-w-[302px]"
                            />
                        </div>

                        <div className="flex flex-col justify-start items-center max-w-[302px]">
                            <label className="text-sm font-medium text-gray-700">Required Therapists:</label>
                            <Input
                                type="text"
                                placeholder="Enter number of therapists required"
                                value={requiredTherapists}
                                onChange={(e) => setRequiredTherapists(e.target.value)}
                                className="mt-1  max-w-[302px]"
                            />
                        </div>
                      </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Service Duration(s):</label>
                            <Input
                                type="text"
                                placeholder="Duration (in minutes)"
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                                className="mt-1"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Price:</label>
                            <Input
                                type="number"
                                placeholder="Enter price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="mt-1"
                            />
                        </div>
                    </form>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" className="bg-black text-white">Close</Button>
                        </DialogClose>
                        <Button onClick={handleSaveChanges} className="bg-green-500 hover:bg-green-600 text-white">
                            Save Changes
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </DialogPortal>
        </Dialog>
      </div>
    </div>
  );
}

export default informationSection;
