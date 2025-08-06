import '../styles/formsections.css'
export default function GeneralInfo({
  data,
  onChange,
  isEditing,
  onSubmit,
  onEdit,
}) {
  return (
    <div>
      <h2>General Information</h2>

      {isEditing ? (
        <>
          <label>
            Name:
            <input
              type="text"
              value={data.name}
              onChange={(e) => onChange({ ...data, name: e.target.value })}
            />
          </label>
          <br />

          <label>
            Email:
            <input
              type="email"
              value={data.email}
              onChange={(e) => onChange({ ...data, email: e.target.value })}
            />
          </label>
          <br />

          <label>
            Phone:
            <input
              type="tel"
              value={data.phone}
              onChange={(e) => onChange({ ...data, phone: e.target.value })}
            />
          </label>
          <br />

          <button onClick={onSubmit}>Submit</button>
        </>
      ) : (
        <>
          <p>
            <strong>Name:</strong> {data.name}
          </p>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
          <p>
            <strong>Phone:</strong> {data.phone}
          </p>
          <button onClick={onEdit}>Edit</button>
        </>
      )}
    </div>
  );
}
