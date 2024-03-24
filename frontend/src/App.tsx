import "./App.css";
import { Navbar } from "./components";

function App() {
  return (
    <div className="min-h-screen bg-[#1d1d1f] text-white flex flex-col items-center">
      <Navbar />
      <div className="pt-48">
        <p>Hello, World</p>
      </div>
    </div>
  );
}

export default App;
