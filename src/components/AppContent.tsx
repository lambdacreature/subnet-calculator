import type { Subnet } from "../context/SubnetContext";
import { useState } from "react";
import { SubnetDetails } from "./SubnetDetails";
import { SubnetForm } from "./SubnetForm";
import { SubnetList } from "./SubnetList";

export const AppContent = () => {
    const [ selectedSubnet, setSelectedSubnet ] = useState<null | Subnet>(null); 
  return (
    <main className="flex gap-5 flex-col">
        <SubnetForm setSelectedSubnet={setSelectedSubnet} />
        <SubnetDetails selectedSubnet={selectedSubnet} />
        <SubnetList selectedSubnet={selectedSubnet} setSelectedSubnet={setSelectedSubnet} />
    </main>
  )
}

