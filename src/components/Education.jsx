export default function Education({
  data,
  onChange,
  isEditing,
  onEdit,
  onSubmit,
}) {
  function handleChange(e) {
    onChange({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h2>Education</h2>

      {isEditing ? (
        <>
          <label>
            School:
            <input
              type="text"
              name="school"
              value={data.school}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Degree:
            <input
              type="text"
              name="degree"
              value={data.degree}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Start Date:
            <input
              type="text"
              name="eduStart"
              value={data.eduStart}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            End Date:
            <input
              type="text"
              name="eduEnd"
              value={data.eduEnd}
              onChange={handleChange}
            />
          </label>
          <br />

          <button onClick={onSubmit}>Save</button>
        </>
      ) : (
        <>
          <p>
            <strong>School:</strong> {data.school}
          </p>
          <p>
            <strong>Degree:</strong> {data.degree}
          </p>
          <p>
            <strong>Start Date:</strong> {data.eduStart}
          </p>
          <p>
            <strong>End Date:</strong> {data.eduEnd}
          </p>
          <button onClick={onEdit}>Edit</button>
        </>
      )}
    </div>
  );
}
