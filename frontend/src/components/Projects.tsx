import { Project } from "./Project";
import SpotArtImg from "../assets/projects/spotart.png"
import AZQRCodeImg from "../assets/projects/az-qr-code.png"
import QuizzicalImg from "../assets/projects/quizzical.png"
import CloudResumeChallengeImg from "../assets/projects/cloud-resume-challenge.png"

function Projects() {
  return (
    <div
      id="projects"
      className="w-full min-h-screen bg-back py-36 md:py-48 px-8 lg:px-72"
    >
      <div className="relative flex justify-end items-center">
        <h2 className="font-poppins font-extrabold text-4xl md:text-7xl text-cerulean">
          Projects.
        </h2>
        <div className="h-1 grow bg-white/20 self-end ml-4 mb-4"></div>
      </div>
      <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Project
          githubLink="https://github.com/antidoid/spot-art"
          projectName="SpotArt"
          projectLink="https://antidoid.github.io/spot-art"
          projectSrc={SpotArtImg}
          tools={["React", "tailwind", "lottiefiles", "SpotifyAPI"]}
          projectShortDesc="A beautiful webpage to check out your favourite music artists."
        />
        <Project
          githubLink="https://github.com/antidoid/quizzical"
          projectName="Quizzical"
          projectLink="https://antidoid.github.io/quizzical"
          projectSrc={QuizzicalImg}
          tools={["React", "tailwind", "lottiefiles", "SpotifyAPI"]}
          projectShortDesc="A quiz app using the Open Trivia DB and React"
        />
        <Project
          githubLink="https://github.com/antidoid/cloud-resume-challenge"
          projectName="Cloud Resume Challenge"
          projectLink="https://www.piyushsingh.me"
          projectSrc={CloudResumeChallengeImg}
          tools={["React", "tailwind", "lottiefiles", "SpotifyAPI"]}
          projectShortDesc="Portfolio website using the powers of cloud computing"
        />
        <Project
          githubLink="https://github.com/antidoid/az-qr-code"
          projectName="QR Code Gen"
          projectLink="https://antidoid.github.io/az-qr-code"
          projectSrc={AZQRCodeImg}
          tools={["React", "tailwind", "lottiefiles", "SpotifyAPI"]}
          projectShortDesc="A Dynamic QR Code Generator with so many colors and styles to choose from."
        />
      </div>
    </div>
  );
}

export default Projects;
