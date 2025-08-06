import React from "react";
import "../styles/livepreview.css";

export default function LivePreview({ formData }) {
  return (
    <div className="preview">
      <div className="preview-header">
        <h1>{formData.general.name}</h1>
        <p>
          {formData.general.email} | {formData.general.phone}
        </p>
      </div>

      <div className="section">
        <h2>Education</h2>
        <p>{formData.education.school}</p>
        <p>{formData.education.degree}</p>
        <p>
          {formData.education.eduStart} - {formData.education.eduEnd}
        </p>
      </div>

      <div className="section">
        <h2>Experience</h2>
        {formData.experience.map((job, index) => (
          <div key={index} className="job">
            <h3>{job.position}</h3>
            <h4>{job.company}</h4>
            <p>
              {job.workStart} - {job.workEnd}
            </p>
            <p>{job.responsibilities}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
