import React from "react";
import TableWithIconComponent from "@/components/customComponents/tableWithIcons";
import UnderNavWithSearch from "@/components/customComponents/underNavWithSearch";
import InformationSection from "@/components/customComponents/informationSection";
import AddNoteBookIcon from "@/assets/addNoteBookIcon";
import Footer from "@/components/customComponents/footer";
function servicesPage({
  handleAddService,
  serviceModalOpen,
  setServiceModalOpen,
  requiredTherapists,
  setRequiredTherapists,
  duration,
  setDuration,
  price,
  setPrice,
  setServiceName,
  serviceName,
  servicesData,
  setServicesData,
  handleDelete
}: {
  handleAddService: () => void;
  serviceModalOpen: boolean;
  setServiceModalOpen: (Open: boolean) => void;
  requiredTherapists: number;
  setRequiredTherapists: (count: number) => void;
  duration: string;
  setDuration: (duration: string) => void;
  price: number;
  setPrice: (price: number) => void
  setServiceName: (name: string) => void
  serviceName: string
  servicesData:[{}]
  setServicesData:(data: [{}]) => void;
  handleDelete:(e: {}) => void
}) {
  const handleEdit = (e: any) => {
    console.log("edit",e);

  };
  return (
    <div className="flex flex-col justify-center items-center w-full h-full ml-20">
      <InformationSection
        title={"Services"}
        Icon={<AddNoteBookIcon />}
        handleAdd={handleAddService}
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
        setServicesData={setServicesData}
      />
      <UnderNavWithSearch />
      <TableWithIconComponent
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        servicesData={servicesData}
      />
      <Footer />
    </div>
  );
}

export default servicesPage;
