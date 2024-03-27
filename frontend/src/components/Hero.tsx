import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="relative pt-36 md:pt-48 md:w-3/5 m-4 min-h-screen md:ml-16 flex flex-col items-start">
      <h1 className="font-poppins font-extrabold text-4xl md:text-8xl">
        Hey, I'm Piyush<span className="text-cerulean">.</span>
      </h1>
      <h2 className="font-semibold text-xl md:text-3xl mt-4 md:mt-8">
        I'm a {}
        <ReactTyped
          className="text-cerulean selection:text-white"
          strings={["Web Developer", "Cloud Engineer", "DevOps Nerd"]}
          typeSpeed={80}
          backSpeed={40}
          loop
        />
      </h2>
      <div className="flex items-center justify-center mt-2 text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
        <span>Bangalore, IN</span>
      </div>
      <p className="text-gray-500 self-center text-base md:text-xl mt-4">
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim
        labore adipisicing minim sint cillum sint consectetur cupidatat.
      </p>
      <motion.button
        className="absolute bottom-24 md:bottom-20 self-center justify-self-stretch flex items-center justify-center bg-cerulean hover:bg-[#00579F] rounded-xl md:rounded-2xl p-2 h-8 md:p-4 md:h-12 hover:scale-110 duration-200 ease-in-out cursor-pointer"
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{
          y: { duration: 0.2, ease: "easeOut" },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 md:w-6 md:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <span className="text-sm md:text-lg">Scroll Down</span>
      </motion.button>
    </div>
  );
}

export default Hero;
