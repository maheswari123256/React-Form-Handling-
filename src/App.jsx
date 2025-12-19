import React, { useState } from "react";
import "./App.css";

function App() {
  // form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  // validation errors
  const [errors, setErrors] = useState({});

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    validateField(name, value);
  };

  // validation logic
  const validateField = (name, value) => {
    let errorMsg = "";

    if (value.trim() === "") {
      errorMsg = `${name} is required`;
    } else {
      if (name === "email" && !value.includes("@")) {
        errorMsg = "Invalid email format";
      }
      if (name === "age" && value < 0) {
        errorMsg = "Age cannot be negative";
      }
    }

    setErrors({
      ...errors,
      [name]: errorMsg
    });
  };

  return (
    <div className="container">
      <h2>React Form Handling</h2>

      {/* Name */}
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleChange}
      />
      <p className="error">{errors.name}</p>

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
      />
      <p className="error">{errors.email}</p>

      {/* Age */}
      <input
        type="number"
        name="age"
        placeholder="Enter age"
        value={formData.age}
        onChange={handleChange}
      />
      <p className="error">{errors.age}</p>

      <hr />

      {/* Display values */}
      <div className="output">
      <h3>Entered Values</h3>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Age: {formData.age}</p>
      </div>
    </div>
  );
}

export default App;
