import Certificate from "./Certificate";
import az400 from "../assets/az400.png";
import az204 from "../assets/az204.png";
import az900 from "../assets/az900.png";
import ghf from "../assets/ghf.png";
import ai900 from "../assets/ai900.png";

function Certification() {
  return (
    <div
      id="certs"
      className="w-full min-h-screen bg-altback py-36 md:py-48 px-8 lg:px-72"
    >
      <div className="flex justify-end items-center">
        <div className="h-1 grow bg-white/20 self-end mb-4 mr-4"></div>
        <h2 className="font-poppins font-extrabold text-4xl md:text-7xl text-right text-cerulean ">
          Certifications.
        </h2>
      </div>
      <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Certificate
          certSrc={az400}
          certName="AZ-400"
          certLink="https://learn.microsoft.com/api/credentials/share/en-us/Piyushsingh-5881/5AC3D1F948488D4F?sharingId=F1908318814FC2CB"
        />
        <Certificate
          certSrc={az204}
          certName="AZ-204"
          certLink="https://learn.microsoft.com/api/credentials/share/en-us/Piyushsingh-5881/579D86812F79DFCE?sharingId=F1908318814FC2CB"
        />
        <Certificate
          certSrc={az900}
          certName="AZ-900"
          certLink="https://learn.microsoft.com/api/credentials/share/en-us/Piyushsingh-5881/5AC677A78A015901?sharingId=F1908318814FC2CB"
        />
        <Certificate
          certSrc={ghf}
          certName="Github Foundations"
          certLink="https://www.credly.com/badges/cee2b15c-8bbf-421f-9edb-d41dbfaf4caf/public_url"
        />
        <Certificate
          certSrc={ai900}
          certName="AI-900"
          certLink="https://learn.microsoft.com/api/credentials/share/en-us/Piyushsingh-5881/843C5B30DD348A2?sharingId=F1908318814FC2CB"
        />
      </div>
    </div>
  );
}

export default Certification;
