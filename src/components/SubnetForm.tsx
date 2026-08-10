import { useSubnetContext, type Subnet } from "../context/SubnetContext";
import React, { useState, type ChangeEvent, type Dispatch, type SetStateAction } from "react";
import { PrimaryButton } from "./PrimaryButton";
import { matchValidSubnet } from "../subnetPrimitives";

type SubnetFormProps = {
  setSelectedSubnet: Dispatch<SetStateAction<null | Subnet>>;
};

export const SubnetForm = ({ setSelectedSubnet }: SubnetFormProps) => {
  const [ inputSubnet, setInputSubnet ] = useState("");
  const { addSubnet } = useSubnetContext();
  
  const hanldeChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setInputSubnet(e.target.value);
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSelectedSubnet(addSubnet(inputSubnet));
  };


  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input 
        className="flex-1 rounded-lg bg-zinc-800 px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-blue-500"

        type="text"
        placeholder="New Subnet..."
        value={inputSubnet}
        onChange={hanldeChange}
      />
      <PrimaryButton 
        disabled={matchValidSubnet(inputSubnet) === null}
      >Add Subnet</PrimaryButton>
    </form>
  );
};
