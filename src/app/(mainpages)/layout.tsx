'use client'
import React, { useEffect, useState } from 'react'
import SideBar from '@/components/customComponents/sideBar'
import NavBar from '@/components/customComponents/navBar'
import BookingPage from "@/components/mainPages/bookingPage"
import ServicePage from "@/components/mainPages/servicesPage"
import StaffPage from "@/components/mainPages/staffPage"
import DashboardPage from "@/components/mainPages/dashBoardPage"
import { useRouter } from 'next/navigation';
function layout() {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState('Services');
    const [servicePage, setServicePage] = useState(false);
    const [staffPage, setStaffPage] = useState(false);
    const [bookingPage, setBookingPage] = useState(false);
    const [dashBoardPage, setDashBoardPage] = useState(false);
    const [serviceName, setServiceName] = useState('');
    const [requiredTherapists, setRequiredTherapists] = useState('');
    const [amenities, setAmenities] = useState('');
    const [duration, setDuration] = useState('');
    const [price, setPrice] = useState('');
    const [serviceModalOpen, setServiceModalOpen] = useState(false);

    const handlePages = () => {
        switch (currentPage) {
            case 'Services':
        console.log('case Services',currentPage);

             setServicePage(true);
             setBookingPage(false);
             setStaffPage(false);
             setDashBoardPage(false);
             break;
            case 'Staff':
        console.log('case Staff',currentPage);

                setStaffPage(true);
                setServicePage(false);
                setDashBoardPage(false);
                setBookingPage(false);
                break;
            case 'Booking':
        console.log('case Booking',currentPage);

                setBookingPage(true);
                setStaffPage(false);
                setServicePage(false);
                setDashBoardPage(false);
                break;
            default:
        console.log('case default',currentPage);

             setDashBoardPage(true);
             setBookingPage(false);
             setStaffPage(false);
             setServicePage(false);
             break;
        }
    }
    useEffect(() => {
        handlePages();
        console.log(currentPage);
    },[currentPage]);
    const handleToday = () => {
        console.log('Today button clicked');
    }
    const handleMonth = () => {
        console.log('Month button clicked');
    }
    const handleAddService = () => {
        setServiceModalOpen(true);
    }
  return (
    <div className="flex gap-3 bg-[#EFF0F5]">
        <div className="">
        <SideBar setCurrentPage={setCurrentPage}/>
        </div>
        <div className="flex flex-col " style={ {width:"calc(100% - 248px)"}}>
        <NavBar valueToDisplay={currentPage}/>
        <div className="flex flex-col justify-center items-center bg-[#EFF0F5] " style={ {width:"calc(100% - 240px)"}}>
            {dashBoardPage && <DashboardPage/>}
           {servicePage && <ServicePage handleAddService={handleAddService} serviceModalOpen={serviceModalOpen}  setServiceModalOpen={setServiceModalOpen}/>} 
          {staffPage&&<StaffPage/>}
          {bookingPage&&<BookingPage/>}
        </div>
            
        </div>

    </div>
  )
}

export default layout