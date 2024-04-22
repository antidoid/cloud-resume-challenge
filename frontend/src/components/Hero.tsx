import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { scroll } from "../utils";

function Hero() {
  return (
    <div id="hero" className="w-full min-h-screen h-dvh bg-back px-8 lg:px-72">
      <div className="relative pt-36 md:pt-48 m-4 h-screen md:ml-16 flex flex-col items-start">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1 }}
          className="font-poppins font-extrabold text-4xl md:text-8xl"
        >
          Hey, I'm Piyush<span className="text-cerulean">.</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", duration: 3 }}
          className="font-semibold text-xl md:text-3xl mt-4 md:mt-8"
        >
          <span className="mr-2">I'm a</span>
          <ReactTyped
            className="text-cerulean selection:text-white"
            strings={["Web Developer", "Cloud Engineer", "DevOps Enthusiast"]}
            typeSpeed={80}
            backSpeed={40}
            loop
          />
        </motion.h2>
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
        <p className="grow md:w-3/4 2xl:w-1/2 self-center flex flex-col justify-center text-gray-500 text-base md:text-xl pb-8 md:pb-16">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui
          minim labore adipisicing minim sint cillum sint consectetur cupidatat.
        </p>
        <motion.button
          className="absolute bottom-16 md:bottom-8 2xl:bottom-20 self-center justify-self-stretch flex items-center justify-center bg-cerulean rounded-xl md:rounded-2xl p-2 h-8 md:p-4 md:h-12 hover:bg-[#00579F] hover:scale-105 duration-200 ease-in-out cursor-pointer"
          onClick={() => scroll("about")}
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
          <span className="text-sm md:text-lg ml-1">Scroll Down</span>
        </motion.button>
      </div>
    </div>
  );
}

export default Hero;
