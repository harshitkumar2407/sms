import React from "react";
import Cards from "./Cards";
import FeatureCards from "./FeatureCards";

export default function Features() {
  return (
    <div className="container text-center mt-5">
      <h3 className="mb-5">Key Features</h3>

      <div className="row g-3 m-5 p-5">
        <div className="col-md-4">
            <FeatureCards LinkIcon="fa-solid fa-qrcode" title="Attendance Management" desc="Biometric / manual / QR / app-based tracking + auto reports"/>
        </div>

        <div className="col-md-4">
            <FeatureCards LinkIcon="fa-solid fa-indian-rupee-sign" title="Fee Collection" desc="Online payments, reminders, receipts, defaulter list"/>
        </div> 

        <div className="col-md-4">
            <FeatureCards LinkIcon="fa-regular fa-address-card" title="Examination & Grades" desc="Exam timetable, marks entry, report cards, CGPA calculation"/>
        </div>

        <div className="col-md-4">
            <FeatureCards LinkIcon="fa-solid fa-graduation-cap" title="Student Information" desc="Complete profile, documents, health info, TC generation"/>
        </div>

        <div className="col-md-4">
            <FeatureCards LinkIcon="fa-solid fa-calendar-days" title="Timetable & Classes" desc="Dynamic timetable, substitution, room allocation"/>
        </div>

        <div className="col-md-4">
            <FeatureCards LinkIcon="fa-solid fa-headset" title="Parent Portal / App" desc="Real-time updates, homework, fees due, PTM scheduling"/>
        </div>

        <div className="col-md-4">
            <FeatureCards LinkIcon="fa-solid fa-chalkboard-user" title="Teacher Dashboard" desc="Attendance entry, assignment upload, performance tracking"/>
        </div>

        <div className="col-md-4">
            <FeatureCards LinkIcon="fa-brands fa-wpforms" title="Admission Management" desc="Online enquiry, form, merit list, document verification"/>
        </div>

        <div className="col-md-4">
            <FeatureCards LinkIcon="fa-regular fa-comments" title="Communication" desc="SMS / Email / App push / Notice board & many more"/>
        </div>
        <div>
            <button className="btn"><u>See All Features...</u></button>
        </div>

      </div>
    </div>
  );
}