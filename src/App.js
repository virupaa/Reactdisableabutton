import React from "react";
import { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <input type="email" onChange={handleChange} value={email} />
      <button disabled={email.length < 1}>BUTTON</button>
    </div>
  );
};

export default App;
