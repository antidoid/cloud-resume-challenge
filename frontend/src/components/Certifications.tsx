import Certificate from "./Certificate";

function Certification() {
  return (
    <div id="certs" className="w-full min-h-screen bg-altback px-8 lg:px-72">
      <div className="relative flex justify-end items-center mt-36 md:mt-48">
        <div className="h-1 grow bg-white/20 self-end mb-4 mr-4"></div>
        <h2 className="font-poppins font-extrabold text-4xl md:text-7xl text-right text-cerulean ">
          Certifications.
        </h2>
      </div>
      <div className="flex justify-between items-center flex-wrap">
        <Certificate />
      </div>
    </div>
  );
}

export default Certification;
