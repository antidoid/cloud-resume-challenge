import Linkedin from "../assets/linkedin.svg";
import PP from "../assets/pp.jpg";

function About() {
  return (
    <div id="about" className="w-full h-screen bg-[#3D3D3D] px-8 lg:px-72">
      <div className="relative flex justify-end items-center mt-20">
        <div className="h-1 grow bg-white/20 self-end mb-4 mr-4 ml-20"></div>
        <h2 className="font-poppins font-extrabold text-4xl md:text-7xl text-right text-cerulean ">
          About Me.
        </h2>
      </div>
      <div className="flex pt-10">
        <div className="w-2/5 px-8 flex flex-col items-center">
          <img src={PP} className="rounded-full w-24 h-24 md:w-48 md:h-48" />
          <div className="px-2 pt-4 flex flex-col items-center justify-center">
            <h4 className="font-semibold text-xl">Tech Stack and Expertise</h4>
            <div className="mt-4 flex flex-wrap  gap-2 text-lg">
              <span className="px-3 py-1 bg-[#232323] rounded-xl">
                Javascript
              </span>
              <span className="px-3 py-1 bg-[#232323] rounded-xl">NodeJS</span>
              <span className="px-3 py-1 bg-[#232323] rounded-xl">Python</span>
              <span className="px-3 py-1 bg-[#232323] rounded-xl">Go</span>
              <span className="px-3 py-1 bg-[#232323] rounded-xl">Linux</span>
              <span className="px-3 py-1 bg-[#232323] rounded-xl">Azure</span>
              <span className="px-3 py-1 bg-[#232323] rounded-xl">React</span>
              <span className="px-3 py-1 bg-[#232323] rounded-xl">Express</span>
              <span className="px-3 py-1 bg-[#232323] rounded-xl">NeoVim</span>
              <span className="px-3 py-1 bg-[#232323] rounded-xl">
                Tailwind
              </span>
            </div>
            <div className="flex gap-4 mt-8 self-start">
              <span className="text-cerulean text-lg hover:underline duration-300">
                My Socials -&#62;
              </span>
              <svg
                className="w-6 h-6 fill-white/80 hover:fill-cerulean cursor-pointer"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-143 145 512 512"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#ECECECCCCCCC"
                  stroke-width="3.072"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4 c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6 c35.5,0,63.3,23,63.3,72.4V508.1z"></path>{" "}
                </g>
              </svg>
              <svg
                className="w-6 h-6 fill-white/80 hover:fill-cerulean cursor-pointer"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-143 145 512 512"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#ECECECCCCCCC"
                  stroke-width="3.072"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4 c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6 c35.5,0,63.3,23,63.3,72.4V508.1z"></path>{" "}
                </g>
              </svg>
              <svg
                className="w-6 h-6 fill-white/80 hover:fill-cerulean cursor-pointer"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-143 145 512 512"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#ECECECCCCCCC"
                  stroke-width="3.072"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4 c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6 c35.5,0,63.3,23,63.3,72.4V508.1z"></path>{" "}
                </g>
              </svg>
              <svg
                className="w-6 h-6 fill-white/80 hover:fill-cerulean cursor-pointer"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-143 145 512 512"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#ECECECCCCCCC"
                  stroke-width="3.072"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4 c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6 c35.5,0,63.3,23,63.3,72.4V508.1z"></path>{" "}
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex grow flex-col gap-4 w-3/5 text-white/90 text-xl">
          <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidat at excepteur officia.
            ex esse exercitation amet. Nisi anim cupidat at excepteur officia.
          </p>
          <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          </p>
          <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat ex esse
            exercitation amet. Nisi anim cupidatat excepteur officia.
            exercitation amet. Nisi anim cupidatat excepteur officia.
          </p>
          <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            Reprehenderit nostrud nostrud ipsum Lorem Reprehenderit nostrud
            nostrud ipsum Lorem
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
