import Logo from "../assets/P-logo.png";

function Navbar() {
  return (
    <nav className="w-11/12 h-10 md:h-[52px] md:w-[550px] rounded-3xl bg-white/15 backdrop-blur-md fixed top-5 py-1 px-2 flex flex-col justify-center">
      <ul className="w-full flex justify-between text-[8px] md:text-base">
        <li>
          <a href="#hero">
            <img
              src={Logo}
              alt="logo"
              className="w-6 h-6 md:w-9 md:h-9 mt-[3px] cursor-pointer"
            />
          </a>
        </li>
        <li className="p-2 hover:text-cerulean hover:scale-110 transition duration-200 ease-in-out cursor-pointer">
          <a href="#about">About Me</a>
        </li>
        <li className="p-2 hover:text-cerulean hover:scale-110 transition duration-200 ease-in-out cursor-pointer">
          <a href="#projects">Projects</a>
        </li>
        <li className="p-2 hover:text-cerulean hover:scale-110 transition duration-200 ease-in-out cursor-pointer">
          <a href="#certs">Certifications</a>
        </li>
        <li className="p-2 hover:text-cerulean hover:scale-110 transition duration-200 ease-in-out cursor-pointer">
          <a href="#contact">Contact</a>
        </li>
        <button className="flex items-center gap-1 bg-[#0064ff] hover:bg-[#0041a3] rounded-xl px-1 md:px-2 h-6 md:h-8 mt-1 hover:scale-110 transition duration-200 ease-in-out cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="w-4 h-3 md:w-5 md:h-4 fill-current"
          >
            <path
              className="text-white"
              d="M190.18359,169.81641a5.99986,5.99986,0,0,1,0,8.48535l-33.94091,33.94092-.00245.00195a6.01828,6.01828,0,0,1-.91967.75122c-.02222.01489-.04566.02686-.06787.04126a5.981,5.981,0,0,1-.97095.511c-.02588.01074-.05249.01855-.07862.0288a5.93837,5.93837,0,0,1-1.04052.30835c-.01953.00391-.03931.00538-.05884.00879a5.80178,5.80178,0,0,1-2.20752,0c-.01953-.00341-.03931-.00488-.05884-.00879a5.93837,5.93837,0,0,1-1.04052-.30835c-.02613-.01025-.05274-.01806-.07862-.0288a5.981,5.981,0,0,1-.97095-.511c-.02221-.0144-.04565-.02637-.06787-.04126a6.01828,6.01828,0,0,1-.91967-.75122l-.00245-.00195-33.94091-33.94092a6,6,0,1,1,8.48535-8.48535L146,193.51465V128a6,6,0,0,1,12,0v65.51465l23.69824-23.69824A6.00075,6.00075,0,0,1,190.18359,169.81641ZM160,42A86.10683,86.10683,0,0,0,82.43286,90.88281,62.00058,62.00058,0,1,0,72,214H96a6,6,0,0,0,0-12H72a50,50,0,0,1,0-100,50.6052,50.6052,0,0,1,5.90649.35571A85.70063,85.70063,0,0,0,74,128a6,6,0,0,0,12,0,74,74,0,1,1,133.20508,44.40039,6.00029,6.00029,0,1,0,9.59472,7.208A86.0061,86.0061,0,0,0,160,42Z"
            />
          </svg>
          <span>Resume</span>
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
