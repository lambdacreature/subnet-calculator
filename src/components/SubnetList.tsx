import type { Dispatch, SetStateAction } from "react";
import { useSubnetContext, type Subnet } from "../context/SubnetContext";
import { GhostDestructiveButton } from "./GhostDestructiveButton";
import { PrimaryButton } from "./PrimaryButton";
import { twMerge } from "tailwind-merge";

type SubnetListProps = {
  setSelectedSubnet: Dispatch<SetStateAction<null | Subnet>>;
  selectedSubnet: null | Subnet;
};

export const SubnetList = ({ selectedSubnet, setSelectedSubnet }: SubnetListProps) => {
  const { subnets, deleteSubnet, splitSubnet } = useSubnetContext();

  return (
    <div className="flex flex-col gap-2">
      {subnets.map(s => (
        <div 
          className={twMerge(
            "flex items-center bg-zinc-800 rounded-lg",
            selectedSubnet !== null && selectedSubnet.id === s.id ? "ring-2 ring-blue-500" : "",
          )}
          key={s.id}
        >
          <div 
            className="py-2 ps-4 flex-1"
            onClick={() => {
              setSelectedSubnet(s);
            }}  
          >
            {s.cidr}
          </div>
          <div 
            className="flex gap-2 pe-4" 
          >
            <PrimaryButton 
              className="rounded-xl"
              onClick={() => setSelectedSubnet(splitSubnet(s.id))}
              disabled={s.size === 1}
            >
              Split
            </PrimaryButton>
            <GhostDestructiveButton 
              className="rounded-xl"
              onClick={() => {
                deleteSubnet(s.id);
                if (selectedSubnet !== null && s.id == selectedSubnet.id) {
                  setSelectedSubnet(null);
                }
              }}
            >
              Delete
            </GhostDestructiveButton>
          </div>
        </div>
      ))}
    </div>
  );
};
