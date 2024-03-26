import { ReactTyped } from "react-typed";

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
            <h3 className="text-sm md:texk-base mt-2">
                This page has been visited <span className="text-orange-300">5</span>{" "}
                times
            </h3>
            <p className="text-gray-500 self-center text-base md:text-xl mt-4">
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
                cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim
                labore adipisicing minim sint cillum sint consectetur cupidatat.
            </p>
        </div>
    );
}

export default Hero;
