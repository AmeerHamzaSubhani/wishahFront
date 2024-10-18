'use client';
import React, { useState } from "react";
import { Separator } from "../ui/separator";
import Cookies from 'js-cookie';
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "../ui/card";
import axios from "axios";
import { toast } from "sonner"
import SaveLoader from "@/components/customComponents/loader";

interface InformationSectionProps {
  title: string;
  Icon: React.ReactNode;
  handleAdd: () => void;
  setServiceName: (name: string) => void;
  serviceName: string;
  requiredTherapists: number;
  setRequiredTherapists: (count: number) => void;
  duration: string;
  setDuration: (duration: string) => void;
  price: number;
  setPrice: (price: number) => void;
  setServiceModalOpen: (open: boolean) => void;
  serviceModalOpen: boolean;
  setServicesData: (data:[{}]) => void
}

function InformationSection({
  title,
  Icon,
  handleAdd,
  serviceName,
  setServiceName,
  requiredTherapists,
  setRequiredTherapists,
  duration,
  setDuration,
  price,
  setPrice,
  setServiceModalOpen,
  serviceModalOpen,
  setServicesData
}: InformationSectionProps) {
  const [serviceNameError, setServiceNameError] = useState(false);
  const [requiredTherapistsError, setRequiredTherapistsError] = useState(false);
  const [durationError, setDurationError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSaveChanges = async () => {
    let isValid = true;

    // Reset previous errors
    setServiceNameError(false);
    setRequiredTherapistsError(false);
    setDurationError(false);
    setPriceError(false);

    // Validate service name
    if (!serviceName) {
      setServiceNameError(true);
      isValid = false;
    }

    // Validate required therapists
    if (!requiredTherapists) {
      setRequiredTherapistsError(true);
      isValid = false;
    }

    // Validate duration
    if (!duration) {
      setDurationError(true);
      isValid = false;
    }

    // Validate price
    if (!price) {
      setPriceError(true);
      isValid = false;
    }

    // If all fields are valid, proceed
    if (isValid) {
      
      const token = Cookies.get('access_token')
      console.log('token===>',token)
      setIsLoading(true)
      try {
        if(token){
          const response = await axios.post(
            `http://localhost:8000/services/createService`,
            {
              serviceName: serviceName,
              reqTherapist: requiredTherapists,
              duration: duration,
              price: price,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
        
          console.log('Response: while Saving', response);
          if(response.data.statusCode === 200){
            setIsLoading(false)
            toast("Service Added", {
              description: "you have added a new service successfully",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
            setServicesData(response.data.updatedData)
            setServiceName('')
            setRequiredTherapists(0)
            setDuration('')
            setPrice(0)
          }
          else {
            toast("Service Added", {
              description: response.data.message,
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        }
        else{
          console.error('Error creating service:');
        }
       
      } catch (error) {
        console.error('Error creating service:', error);
      }
      
      console.log({
        serviceName,
        requiredTherapists,
        duration,
        price,
        serviceModalOpen,
      });
      setServiceModalOpen(true);
    }
  };

  return (
    <div className="flex flex-row justify-between items-center w-full space-x-4 space-y-5 py-2 ml-10 bg-transparent my-6">
      <div className="flex flex-col">
        <div className="text-2xl font-semibold"> {title} Information</div>
        <div className="flex justify-center items-center w-[120px] h-[21px] rounded-md border-2 border-[#000000] mt-4">
          <div className="flex w-[25px] text-xs mr-1 text-black">PDF</div>
          <Separator
            className="bg-black"
            orientation="vertical"
            decorative={true}
          />
          <div className="flex w-[25px] text-xs text-black mx-2">Print</div>
          <Separator
            className="bg-black"
            orientation="vertical"
            decorative={true}
          />
          <div className="flex w-[25px] ml-1 text-xs text-black">Excel</div>
        </div>
      </div>
      <div className="" onClick={handleAdd}>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="flex flex-row justify-center items-center bg-[#8BC152] hover:bg-[#80c239] gap-x-3"
              size="lg"
              variant="default"
            >
              <div className="div">{Icon}</div>
              <div className="div">{title}</div>
            </Button>
          </DialogTrigger>
          <DialogPortal>
            <DialogOverlay />

            {isLoading&&(<SaveLoader/>)}
            <DialogContent className="min-w-[450px] max-w-[730px] p-6">
              <DialogHeader>
                <DialogTitle className="text-2xl text-[#F05F97]">
                  Add New Services
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
                      value={serviceName}
                      onChange={(e) => setServiceName(e.target.value)}
                      className={`mt-3 w-[302px] ${
                        serviceNameError ? "border-red-500" : ""
                      }`}
                    />
                  </div>

                  <div className="flex flex-col justify-start max-w-[302px]">
                    <span className="block text-sm font-bold text-gray-700">
                      Required Therapists:
                    </span>
                    <Input
                      type="text"
                      placeholder="Enter number of therapists required"
                      value={requiredTherapists}
                      onChange={(e) =>
                        setRequiredTherapists(parseInt(e.target.value))
                      }
                      className={`mt-3 w-[302px] ${
                        requiredTherapistsError ? "border-red-500" : ""
                      }`}
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
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className={`mt-3 w-[302px] ${
                          durationError ? "border-red-500" : ""
                        }`}
                      />
                    </div>

                    <div>
                      <span className="block text-sm font-bold text-gray-700">
                        Price:
                      </span>
                      <Input
                        type="text"
                        placeholder="Enter price"
                        value={price}
                        onChange={(e) => setPrice(parseInt(e.target.value))}
                        className={`mt-3 w-[302px] ${
                          priceError ? "border-red-500" : ""
                        }`}
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
                  onClick={handleSaveChanges}
                  className="bg-green-500 hover:bg-green-600 text-white"
                >
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

export default InformationSection;
