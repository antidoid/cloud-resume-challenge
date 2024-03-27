import { motion } from "framer-motion";

function ViewCount() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.25 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", duration: 0.7 }}
      className="w-full relative"
    >
      <div className="max-w-60 h-10 p-2 group absolute right-8 top-5 flex justify-center items-center gap-2 rounded-3xl cursor-pointer bg-white/15 backdrop-blur-md">
        <svg
          className="w-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
        <span className="tracking-[-1rem] overflow-hidden duration-300 ease-in-out group-hover:tracking-wider">
          You're Viewer{" "}
        </span>
        <div className="bg-cerulean font-semibold flex justify-center items-center px-2 py-1 h-5 rounded-md text-sm">
          16
        </div>
      </div>
    </motion.div>
  );
}

export default ViewCount;
