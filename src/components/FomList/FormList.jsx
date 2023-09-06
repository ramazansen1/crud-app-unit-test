import { useState } from "react";

function FormList({ addUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addUser({ name, email });

    setName("");
    setEmail("");
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="d-flex flex-column gap-2">
        <div className="d-flex flex-column gap-2">
          <label htmlFor="name">İsim</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            type="text"
            id="name"
          />
        </div>
        <div className="d-flex flex-column gap-2">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            type="email"
            id="email"
          />
        </div>
        <button className="btn btn-primary">Kullanıcı Ekle</button>
      </form>
    </>
  );
}

export default FormList;
