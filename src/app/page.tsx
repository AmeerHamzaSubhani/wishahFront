'use client';
import MainIcon from "@/assets/mainIcon";
import { Button } from "@/components/ui/button";
import ArrowIcon from "@/assets/arrowIcon"
export default function Home() {

  const handleClick = () => {
    console.log("Clicked");
  }
  return (
    <div className="w-full h-screen"> {/* Ensure height is set */}
      <div className="relative bg-main-bg h-full w-full bg-center text-white">
        <div className="absolute w-full bg-cover h-full">
        </div> 
        <div className="absolute flex flex-col justify-center items-center  h-full space-y-10"> {/* Flex container full height */}
          {/* Icon */}
          <div className="div">
            <MainIcon />
          </div>
          {/* Header text */}
          <div className="flex justify-center items-center">
          <h3 className=" w-[70%] sm:w-full text-l sm:text-3xl font-bold text-white">
              About Wishah Appointment Booking & Schedules
              </h3>
          </div>
          {/* Between */}
          <div className="w-[70%] sm:w-[80%] text-white leading-6">
            {/* Add content here */}
            <p>
            Wishah SPA booking is one of the best spa, salon and any kinds of Therapist's appointment and schedules booking application
with integrated CMS website. Using this system admin can Customize Service time slot, Daily/Weekly/Monthly Booking
& cancelation limitation, Employee wise service and service price.
            </p>
          </div>
          {/* Button */}
          <div className="flex justify-center items-center">
            <Button className=" bg-[#8BC152] gap-x-3" size="lg" variant='default' onClick={handleClick}>
              get started
            <ArrowIcon/>
            </Button>
          </div>
        </div>
          
      </div>
    </div>
  );
}
