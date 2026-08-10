import { useState, type ReactNode } from "react";
import { SubnetContext, type Subnet } from "./SubnetContext";
import { formatAddr, formatCidrMask, matchValidSubnet, parseAddr, parseCidrMask } from "../subnetPrimitives";

type SubnetContextProviderProps = {
  children: ReactNode;
};

export const SubnetContextProvider = ({ children }:SubnetContextProviderProps) => {
  const [ subnets, setSubnets ] = useState<Subnet[]>([]);


  const addSubnet = (cidr: string) => {
    const subnetData = matchValidSubnet(cidr);

    if (subnetData === null) {
      throw new Error("Invalid CIDR");
    }

    const newSubnet = {
      id: crypto.randomUUID(),
      ...subnetData,
    };

    setSubnets(prev => [...prev, newSubnet]);

    return newSubnet;
  };

  const deleteSubnet = (id: string) => {
    setSubnets(
      subnets.filter(s => s.id !== id)
    );
  };

  const splitSubnet = (id: string) => {
    /*
     * Split the subnet in half, return the first half
     * so it can be selected to show its details with the other 
     * half right below it
     *
     * */
    const targetSubnet = subnets.find(s => s.id == id) as Subnet;
    const targetIndex  = subnets.indexOf(targetSubnet);

    const newCidrMask = `/${parseInt(formatCidrMask(parseAddr(targetSubnet.mask)).slice(1))+1}`;
    const newParsedMask = parseCidrMask(newCidrMask);

    const firstHalfStart  = targetSubnet.start;
    const secondHalfStart = formatAddr(parseAddr(targetSubnet.end) & newParsedMask);

  
    type subnetData = {
      cidr: string;
      start: string;
      end: string;
      mask: string;
      size: number;
    };

    const firstHalf = {
      id: crypto.randomUUID(),
      ...matchValidSubnet(`${firstHalfStart}${newCidrMask}`) as subnetData,
    };

    const secondHalf = {
      id: crypto.randomUUID(),
      ...matchValidSubnet(`${secondHalfStart}${newCidrMask}`) as subnetData,
    };

    setSubnets([
      ...subnets.slice(0, targetIndex),
      firstHalf,
      secondHalf,
      ...subnets.slice(targetIndex+1),
    ]);

    return firstHalf;
  };

  return (
    <SubnetContext
      value={{
        subnets,
        addSubnet,
        deleteSubnet,
        splitSubnet,
      }}
    >
      {children}
    </SubnetContext>
  );
};


