import { Button } from "./Button";

export const SubnetForm = () => {
  return (
    <form className="flex gap-2">
      <input 
        className="flex-1 rounded-lg bg-zinc-800 px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        placeholder="New Subnet..."
      />
      <Button>Add Subnet</Button>
    </form>
  );
};
