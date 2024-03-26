import "./App.css";
import { Hero, Navbar } from "./components";

function App() {
  return (
    <div className="min-h-screen bg-[#1d1d1f] text-white flex flex-col items-center font-inter">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
