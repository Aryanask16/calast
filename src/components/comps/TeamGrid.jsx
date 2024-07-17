import GlareCard from "../ui/GlareCard";
import imageOne from "../../assets/real11.jpg";
import imagetwo from "../../assets/real21.jpg";
import imagethree from "../../assets/real31.jpg";
import imagefour from "../../assets/real41.jpg";
import imagefive from "../../assets/real51.jpg";

import "../css/Team.css";

export default function TeamGrid() {
  return (
    <div className="w-4/5 px-8 mr-32 flex justify-center flex-wrap">
      <div className="team-inner-cont w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <GlareCard className="team-mem flex flex-col px-2 justify-center card-height-width shadow-lg rounded-lg">
          <img className="h-2/5 w-full object-cover rounded-t-lg" src={imageOne} />
          <div className="p-4">
            <p className="pt-4"><b>Name:</b> CA Pawan Kumar Mishra (ACA, M.com. (Marketing & Finance), B.com.)</p>
            <p><b>Designation:</b> Partner</p>
            <p><b>Experience:</b> In Practice Since 2021</p>
            <p><b>Area of Expertise:</b> Direct Taxation, Indian GAAP & Ind AS Consultant, Financial Reporting and Accounting.</p>
          </div>
        </GlareCard>
        <GlareCard className="team-mem flex flex-col px-2 justify-center card-height-width shadow-lg rounded-lg">
          <img className="h-2/5 w-full object-cover rounded-t-lg" src={imagetwo} />
          <div className="p-4">
            <p className="pt-4"><b>Name:</b> CA Shishir Kumar Dubey (FCA, DISA, FAFE, FAFP(ICAI), Forensic Auditor, CPA, ISA(ICAI), Peer Reviewer)</p>
            <p><b>Designation:</b> Managing Partner</p>
            <p><b>Experience:</b> In Practice Since 2010</p>
            <p><b>Area of Expertise:</b> Corporate Assurance and Consulting Services, Digital Forensics, Information System Based Audit, Goods & Services Tax, Direct Taxation, NGO Consulting, Non-Corporate Assurance Services, Compliance Services.</p>
          </div>
        </GlareCard>
        <GlareCard className="team-mem flex flex-col px-2 justify-center card-height-width shadow-lg rounded-lg">
          <img className="h-2/5 w-full object-cover rounded-t-lg" src={imagethree} />
          <div className="p-4">
            <p className="pt-4"><b>Name:</b> CA Sanjay Mani Tripathi (ACA, M.com.(Finance), B.com.)</p>
            <p><b>Designation:</b> Partner</p>
            <p><b>Experience:</b> More than 14 Years of experience in Service sector.</p>
            <p><b>Area of Expertise:</b> Financial Analysis & Reporting (MIS), Taxation & Statutory Compliance, Costing, Budgeting & Variance Analysis, Auditing, Capex Accounting, Insurance Working</p>
          </div>
        </GlareCard>
        <GlareCard className="team-mem flex flex-col px-2 justify-center card-height-width shadow-lg rounded-lg">
          <img className="h-2/5 w-full object-cover rounded-t-lg" src={imagefour} />
          <div className="p-4">
            <p className="pt-4"><b>Name:</b> CA Puneet Singh (ACA, M.com. (Finance), B.com.)</p>
            <p><b>Designation:</b> Partner</p>
            <p><b>Experience:</b> In Practice Since 2021</p>
            <p><b>Area of Expertise:</b> Goods & Services Tax, Assessment & Litigation, NGO Consulting, Accounting & Compliance, Non-Corporate Consulting.</p>
          </div>
        </GlareCard>
        <GlareCard className="team-mem flex flex-col px-2 justify-center card-height-width shadow-lg rounded-lg">
          <img className="h-2/5 w-full object-cover rounded-t-lg" src={imagefive} />
          <div className="p-4">
            <p className="pt-4"><b>Name:</b> CA Shubham Sureka (ACA, M.com. (Finance), B.com.)</p>
            <p><b>Designation:</b> Partner</p>
            <p><b>Experience:</b> In Practice Since 2021</p>
            <p><b>Area of Expertise:</b> Finance, Audit and Direct Taxation, MIS Reporting, Finance management, Statutory Audit, Corporate assurance consulting, Compliance of Startup, Non-Corporate Assurance Services, Compliance Services.</p>
          </div>
        </GlareCard>
      </div>
    </div>
  );
}
