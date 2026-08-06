import { Header } from "./components/Header";
import { SubnetDetails } from "./components/SubnetDetails.tsx"
import { SubnetForm } from "./components/SubnetForm";
import { SubnetList } from "./components/SubnetList";

export default function App() {
  return (
    <div className="max-w-2xl mx-auto p-4 flex flex-col gap-5">
      <Header />
      <SubnetForm />
      <SubnetDetails />
      <SubnetList />
    </div>
  );
}
