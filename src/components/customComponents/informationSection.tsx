import React from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
function informationSection({ title, Icon }: { title: string; Icon: any }) {
  return (
    <div className="flex flex-row justify-between items-center w-full space-x-4 py-2 ml-10 bg-transparent">
      <div className="flex flex-col">
        <div className="text-2xl font-semibold"> {title} Information</div>
        <div className="flex justify-center items-center w-[120px] h-[21px] rounded-md border-2 border-[#000000]">
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
      <div className="div">
        <Button className="flex flex-row justify-center items-center  bg-[#8BC152] hover:bg-[#80c239] gap-x-3" size="lg" variant='default'>
          <div className="div">{Icon}</div>
          <div className="div">{title}</div>
        </Button>
      </div>
    </div>
  );
}

export default informationSection;
