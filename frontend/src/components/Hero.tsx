function Hero() {
    return (
        <div className="mt-48">
            <h1 className="font-poppins font-extrabold text-8xl">
                Hey, I'm Piyush<span className="text-cerulean">.</span>
            </h1>
            <h2 className="font-semibold text-3xl mt-8">
                I'm a{" "}
                <span className="text-cerulean">Cloud Engineer | Web Developer</span>
            </h2>
            <h3 className="text-xl mt-2">
                This page has been visited <span className="text-orange-300">5</span>{" "}
                times
            </h3>
        </div>
    );
}

export default Hero;
