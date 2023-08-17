import React from "react";
import CommunityData from "../components/CommunityData";
import Input from "../components/inputs/Input";
import Upload from "../components/inputs/Upload";

const Community = () => {
  return (
    <div className="relative w-full ">
      <CommunityData />

      <br />
      <div className="form flex flex-col gap-[30px] items-center md:items-start px-[25px] md:flex-row  justify-between">
        <div className="inputs flex flex-col gap-[15px] w-full md:w-[70%]">
          <Input placeholder="Full Name" primary />
          <Input placeholder="Father Name" primary />
          <Input placeholder="Mul Niwas" primary />
          <Input placeholder="Place of birth" primary />
          <Input placeholder="Education" primary />
          <Input placeholder="Business Letter" primary />
          <Input placeholder="E-mail Address" primary />
          <Input placeholder="Mobile Number" primary />
          <Input placeholder="Phone Number" primary />
          <Input placeholder="Business Letter" primary />

          <textarea
            className="rounded-[8px]
     outline-blue-500
     p-[15px]
    w-full 
    border
    resize-none
    "
            placeholder="Address"
            cols={10}
            rows={5}
          />
          <br />
        </div>

        <div className="uploads h-fit shadow-md">
          <Upload />
        </div>
        <br />
      </div>
    </div>
  );
};

export default Community;
