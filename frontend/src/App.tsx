import "./App.css";
import { About, Hero, Navbar, ViewCount } from "./components";

function App() {
  return (
    <div className="min-h-screen bg-[#1d1d1f] text-white flex flex-col items-center font-inter selection:bg-cerulean selection:text-black">
      <Navbar />
      <ViewCount />
      <Hero />
      <About />
    </div>
  );
}

export default App;
