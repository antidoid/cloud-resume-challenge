import "./App.css";
import { About, Hero, Navbar, ViewCount } from "./components";

function App() {
  return (
    <div className="text-white flex flex-col items-center font-inter selection:bg-cerulean selection:text-black">
      <Navbar />
      <ViewCount />
      <Hero />
      <About />
    </div>
  );
}

export default App;
