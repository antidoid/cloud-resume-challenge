import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="mt-36 md:mt-48 md:w-3/5 m-4 md:ml-16 flex flex-col items-start">
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
      <p className="text-gray-500 self-center text-base md:text-xl mt-4">
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim
        labore adipisicing minim sint cillum sint consectetur cupidatat.
      </p>

      <motion.button
        className="absolute bottom-6 self-center mx-auto flex items-center justify-center bg-cerulean hover:bg-[#00579F] rounded-xl p-4 h-10 hover:scale-110 duration-200 ease-in-out cursor-pointer"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{
          y: { duration: 0.4, ease: "easeInOut" },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <span className="ml-1 text-lg">Scroll Down</span>
      </motion.button>
    </div>
  );
}

export default Hero;
