import { createContext, useContext } from "react";

export type Subnet = {
  id:    string;
  cidr:  string;
  start: string;
  end:   string;
  mask:  string;
  size:  number;
};

type ContextType = {
  subnets: Subnet[];
  addSubnet: (cidr: string) => Subnet;
  deleteSubnet: (id: string) => void;
  splitSubnet: (id: string) => Subnet;
};

export const SubnetContext = createContext<null  | ContextType>(null);

export const useSubnetContext = () => {
  const subnetContext = useContext(SubnetContext);

  if (subnetContext === null) {
    throw new Error("null context");
  }

  return subnetContext;
};
