import type { Subnet } from "../context/SubnetContext";

type SubnetDetailsProps = {
  selectedSubnet: null | Subnet;
};

export const SubnetDetails = ({ selectedSubnet }: SubnetDetailsProps) => {
  if (selectedSubnet === null) {
    return null;
  };

  return (
    <div className="self-center flex flex-1 flex-col gap-0 bg-zinc-800 py-4 px-8 rounded-lg">
      <div className="flex justify-between gap-8">
        <span>CIDR:</span>
        <span>{selectedSubnet.cidr}</span>
      </div>

      <div className="flex justify-between gap-2">
        <span>Start:</span>
        <span>{selectedSubnet.start}</span>
      </div>

      <div className="flex justify-between gap-2">
        <span>End:</span>
        <span>{selectedSubnet.end}</span>
      </div>

      <div className="flex justify-between gap-2">
        <span>Mask:</span>
        <span>{selectedSubnet.mask}</span>
      </div>

      <div className="flex justify-between gap-2">
        <span>Size:</span>
        <span>{selectedSubnet.size}</span>
      </div>
    </div>
  );
};
