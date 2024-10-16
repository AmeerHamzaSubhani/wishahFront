import React from "react";
import MainIcon from "@/assets/mainIcon";
import BagIcon from "@/assets/bagIcon";
import DashBoardIcon from "@/assets/dashBoardIcon";
import LogoutIcon from "@/assets/logoutIcon";
import NoteBookIcon from "@/assets/noteBookIcon";
import BookingIcon from "@/assets/bookingIcon";
function SideBar({setCurrentPage}:{setCurrentPage:any}) {
   const handleLogOut =()=>{
    console.log('Logout button clicked');
   }
  return (
    <div className="flex flex-col w-[248px] bg-white h-screen shadow-md">
      {/* Logo Section */}
      <div className="flex justify-center items-center my-10">
        <MainIcon widthOfIcon="120" heightOfIcon="96" />
      </div>
      <div className="flex justify-center items-center mt-2">
        <span className="border-2 border-[#D6D7D8] w-[176px] rounded-lg"></span>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col  mt-10 space-y-6 px-4">
        <MenuItem icon={<DashBoardIcon color={'#8BC152'}/>} label="Dashboard" setCurrentPage={setCurrentPage} />
        <MenuItem icon={<NoteBookIcon color={'#8BC152'}/>} label="Services" setCurrentPage={setCurrentPage}/>
        <MenuItem icon={<BagIcon color={'#8BC152'}/>} label="Staff" setCurrentPage={setCurrentPage} />
        <MenuItem icon={<BookingIcon color={'#8BC152'}/>} label="Booking" setCurrentPage={setCurrentPage} />
      </div>

      {/* Logout Section */}
      <div className="flex flex-row mt-auto mb-4 px-4" onClick={handleLogOut}>
        <MenuItem icon={<LogoutIcon />} label="Logout"  />
      </div>
    </div>
  );
}

// MenuItem Component
const MenuItem = ({ icon, label, setCurrentPage }:{label:string,setCurrentPage:any}) => {
  return (
    <div className="flex flex-row justify-start items-center w-full space-x-4 py-2 ml-10" onClick={() => setCurrentPage(label)}>
      <div className="">{icon}</div>
      <span className="text-gray-800">{label}</span>
    </div>
  );
};

export default SideBar;
