"use client";
import React, { use, useEffect, useState } from "react";
import SideBar from "@/components/customComponents/sideBar";
import NavBar from "@/components/customComponents/navBar";
import BookingPage from "@/components/mainPages/bookingPage";
import ServicePage from "@/components/mainPages/servicesPage";
import StaffPage from "@/components/mainPages/staffPage";
import DashboardPage from "@/components/mainPages/dashBoardPage";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import axios from "axios";
function RanderPage() {
  const [currentPage, setCurrentPage] = useState("Services");
  const [servicePage, setServicePage] = useState(false);
  const [staffPage, setStaffPage] = useState(false);
  const [bookingPage, setBookingPage] = useState(false);
  const [dashBoardPage, setDashBoardPage] = useState(false);
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [requiredTherapists, setRequiredTherapists] = useState(0);
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState(0);
  const [serviceName, setServiceName] = useState('');
  const [servicesData, setServicesData] = useState([]);
  const route = useRouter();
  const handlePages = () => {
    switch (currentPage) {
      case "Services":
        console.log("case Services", currentPage);

        setServicePage(true);
        setBookingPage(false);
        setStaffPage(false);
        setDashBoardPage(false);
        break;
      case "Staff":
        console.log("case Staff", currentPage);

        setStaffPage(true);
        setServicePage(false);
        setDashBoardPage(false);
        setBookingPage(false);
        break;
      case "Booking":
        console.log("case Booking", currentPage);

        setBookingPage(true);
        setStaffPage(false);
        setServicePage(false);
        setDashBoardPage(false);
        break;
      default:
        console.log("case default", currentPage);

        setDashBoardPage(true);
        setBookingPage(false);
        setStaffPage(false);
        setServicePage(false);
        break;
    }
  };

  const getServicesData = async () => {
    const token = Cookies.get('access_token')
    console.log('token===>',token)
    try {
      const response = await axios.get(
        `http://localhost:8000/services/getAllServices`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    
      console.log('Response: while Saving', response);
      if(response.data.statusCode === 200){
        setServicesData(response.data.data);
      }
      } catch (error) {
          console.log('Error: while Saving', error);
      }
  }

//   const handleEditService = async () => {
//     const token = Cookies.get('access_token')
//     console.log('token===>',token)
//     try {
//       const response = await axios.get(
//         `http://localhost:8000/services/getAllServices`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
    
//       console.log('Response: while Saving', response);
//       if(response.data.statusCode === 200){
//         setServicesData(response.data.data);
//       }
//       } catch (error) {
//           console.log('Error: while Saving', error);
//       }
//   }
  const handleDeleteService = async (e: any) => {
    const token = Cookies.get('access_token')
    console.log('token===>',token)
    try {
        if(token){
            const response = await axios.post(
                `http://localhost:8000/services/deleteService`,{
                  id: e._id
                },
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );
            
              console.log('Response: while Saving', response);
              if(response.data.statusCode === 200){
                setServicesData(response.data.updateData);
              }
        } else {
            console.log('Error: while Saving token not found');
        }
      
      } catch (error) {
          console.log('Error: while Saving', error);
      }
  }
  useEffect(() => {
    getServicesData();
  },[])
  useEffect(() => {
    handlePages();
    console.log(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);
  // const handleToday = () => {
  //     console.log('Today button clicked');
  // }
  // const handleMonth = () => {
  //     console.log('Month button clicked');
  // }
  const handleAddService = () => {
    setServiceModalOpen(true);
  };
  const handleLogOut = () => {
    console.log("Logout button clicked");
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    Cookies.remove("isAdmin");
    route.push("/");
  };
  return (
    <div className="flex gap-3 bg-[#EFF0F5]">
      <div className="">
        <SideBar setCurrentPage={setCurrentPage} handleLogOut={handleLogOut} />
      </div>
      <div className="flex flex-col " style={{ width: "calc(100% - 248px)" }}>
        <NavBar valueToDisplay={currentPage} />
        <div
          className="flex flex-col justify-center items-center bg-[#EFF0F5] "
          style={{ width: "calc(100% - 240px)" }}
        >
          {dashBoardPage && <DashboardPage />}
          {servicePage && (
            <ServicePage
              handleAddService={handleAddService}
              serviceModalOpen={serviceModalOpen}
              setServiceModalOpen={setServiceModalOpen}
              requiredTherapists={requiredTherapists}
              setRequiredTherapists={setRequiredTherapists}
              duration={duration}
              setDuration={setDuration}
              price={price}
              setPrice={setPrice}
              setServiceName={setServiceName}
              serviceName={serviceName}
              servicesData={servicesData}
              setServicesData={setServicesData}
              handleDelete={handleDeleteService}
            />
          )}
          {staffPage && <StaffPage />}
          {bookingPage && <BookingPage />}
        </div>
      </div>
    </div>
  );
}

export default RanderPage;
