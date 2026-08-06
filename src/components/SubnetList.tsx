import { Button } from "./Button";
import type { Subnet } from "./SubnetDetails";

export const SubnetList = () => {
  const subnets: Subnet[] = [
    {
      cidr:  "192.168.43.1/24",
      start: "192.168.43.0",
      end:   "192.168.43.255",
      mask:  "255.255.255.0",
      size:  256,
    },
    {
      cidr:  "10.0.0.1/8",
      start: "10.0.0.0",
      end:   "10.255.255.255",
      mask:  "255.0.0.0",
      size:  67,
    }
  ]; 

  return (
    <div className="flex flex-col gap-2">
      {subnets.map(s => (
        <div className="flex justify-between items-center bg-zinc-800 py-2 px-4 rounded-lg">
          {s.cidr}
          <div className="flex gap-2">
            <Button>Split</Button>
            <Button>Delete</Button>
          </div>
        </div>
      ))}
    </div>
  );
};
