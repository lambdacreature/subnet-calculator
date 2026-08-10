import { useSubnetContext } from "../context/SubnetContext";
import { PrimaryButton } from "./PrimaryButton";

export const Header = () => {
  const { subnets } = useSubnetContext();
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-3xl font-bold">Subnet Calculator</h1>
      <PrimaryButton
        disabled={!subnets.some(s => s.size > 1)}
        onClick={() => console.log("Coming Soon ;P") }
      >Split All</PrimaryButton>
    </header>
  );
};
