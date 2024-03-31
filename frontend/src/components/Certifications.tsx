import Certificate from "./Certificate";
import az204 from "../assets/az204.png";
import az900 from "../assets/az900.png";
import awscp from "../assets/awscp.png";
import ml from "../assets/ml_regression_classification.png";

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
          certSrc={awscp}
          certName="AWS Cloud Practitioner"
          certLink="https://www.credly.com/badges/e441847e-9a17-4868-ba3b-ed0d15bd37d5/public_url"
        />
        <Certificate
          certSrc={ml}
          certName="Supervised Machine Learning"
          certLink="https://coursera.org/share/38b241052f94da4470945a0e7fd8aa1b"
        />
      </div>
    </div>
  );
}

export default Certification;
