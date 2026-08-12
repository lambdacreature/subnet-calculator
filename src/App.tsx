
import { Header } from "./components/Header";
import { AppContent } from "./components/AppContent.tsx";
import { SubnetContextProvider } from "./context/SubnetContextProvider.tsx";

export default function App() {

  return (
    <div className="max-w-2xl mx-auto p-4 flex flex-col gap-5">
      <SubnetContextProvider>
        <Header />
        <AppContent />
      </SubnetContextProvider>
    </div>
  );
}
