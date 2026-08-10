import { useState } from "react";
import { Header } from "./components/Header";
import { SubnetDetails } from "./components/SubnetDetails.tsx"
import { SubnetForm } from "./components/SubnetForm";
import { SubnetList } from "./components/SubnetList";
import { SubnetContextProvider } from "./context/SubnetContextProvider.tsx";
import type { Subnet } from "./context/SubnetContext.ts";

export default function App() {
  const [ selectedSubnet, setSelectedSubnet ] = useState<null | Subnet>(null); 

  return (
    <div className="max-w-2xl mx-auto p-4 flex flex-col gap-5">
      <SubnetContextProvider>
        <Header />
        <SubnetForm setSelectedSubnet={setSelectedSubnet} />
        <SubnetDetails selectedSubnet={selectedSubnet} />
        <SubnetList selectedSubnet={selectedSubnet} setSelectedSubnet={setSelectedSubnet} />
      </SubnetContextProvider>
    </div>
  );
}
