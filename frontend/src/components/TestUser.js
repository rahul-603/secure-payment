import React, { useState } from "react";
import axios from "axios";

const TestUser = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/test-user", user);
      setResponse(res.data.message);
    } catch (error) {
      setResponse("Error: " + error.response?.data?.message || "Server Error");
    }
  };

  return (
    <div>
      <h2>Test User Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={user.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
};

export default TestUser;
