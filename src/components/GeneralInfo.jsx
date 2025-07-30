function GeneralInfo({ data, onChange }) {
  return (
    <div>
      <h2>General Information</h2>

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
    </div>
  );
}

export default GeneralInfo;
