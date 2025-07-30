import React from "react";

export default function LivePreview({ formData }) {
  return (
    <div className="preview">
      <h2>{formData.general.name}</h2>
      <p>{formData.general.email}</p>
      <p>{formData.general.phone}</p>
      <br />
      <h2>Education</h2>
      <p>{formData.education.school}</p>
      <p>{formData.education.degree}</p>
      <p>{formData.education.eduStart}</p>
      <p>{formData.education.eduEnd}</p>
      <h2>Experience</h2>
      {formData.experience.length > 0 &&
        formData.experience.map((job, index) => (
          <div key={index}>
            <h3>{job.position}</h3>
            <h4>{job.company}</h4>
            <p>{job.responsibilities}</p>
            <p>
              {job.workStart} - {job.workEnd}
            </p>
          </div>
        ))}
    </div>
  );
}
