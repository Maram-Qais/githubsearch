// ProfileSearchForm.js
import { useState } from "react";
import "./styles.css";
import "@fortawesome/fontawesome-free/css/all.css";

function ProfileSearchForm({ search }) {
  const [term, setTerm] = useState("");

  function handleChange(evt) {
    setTerm(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    search(term);
    setTerm("");
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-wrapper">
        <input
          type="text"
          value={term}
          onChange={handleChange}
          placeholder="Search GitHub user"
          required
        />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </form>
  );
}

export default ProfileSearchForm;