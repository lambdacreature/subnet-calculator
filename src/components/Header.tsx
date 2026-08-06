import { Button } from "./Button";

export const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-3xl font-bold">Subnet Calculator</h1>
      <Button>Split All</Button>
    </header>
  );
};
