import { motion } from "framer-motion";

function ViewCount() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.25 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", duration: 0.7 }}
      className="hidden md:block w-full relative"
    >
      <div className="max-w-60 h-10 p-2 group absolute right-8 top-5 flex justify-center items-center gap-2 rounded-3xl cursor-pointer bg-white/15 backdrop-blur-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
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
