import "../styles/formsections.css";

export default function Experience({
  data,
  onChange,
  isEditing,
  onSubmit,
  onEdit,
  onRemove,
  canRemove,
}) {
  function handleChange(e) {
    onChange({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h2>Experience</h2>

      {isEditing ? (
        <>
          <label>
            Company:
            <input
              type="text"
              name="company"
              value={data.company}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Title:
            <input
              type="text"
              name="position"
              value={data.position}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Responsibilities:
            <textarea
              name="responsibilities"
              value={data.responsibilities}
              onChange={handleChange}
              rows={4} // You can adjust rows for initial height
              style={{ width: "100%", resize: "vertical" }} // Optional inline styles for better UX
            />
          </label>
          <br />

          <label>
            Work Start:
            <input
              type="text"
              name="workStart"
              value={data.workStart}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Work End:
            <input
              type="text"
              name="workEnd"
              value={data.workEnd}
              onChange={handleChange}
            />
          </label>
          <br />

          <button onClick={onSubmit}>Save</button>
          {canRemove && <button onClick={onRemove}>Remove</button>}
        </>
      ) : (
        <>
          <p>Company: {data.company}</p>
          <p>Title: {data.position}</p>
          <p>Responsibilities: {data.responsibilities}</p>
          <p>Work Start: {data.workStart}</p>
          <p>Work End: {data.workEnd}</p>
          <button onClick={onEdit}>Edit</button>
        </>
      )}
    </div>
  );
}
