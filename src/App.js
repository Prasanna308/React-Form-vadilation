import React, { useState } from "react";

function App() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Error state
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert(
        `User Registered:\nName: ${formData.name}\nEmail: ${formData.email}`
      );
      setFormData({ name: "", email: "", password: "" });
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>User Registration Form with Validation</h1>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        {/* Name */}
        <div style={{ marginBottom: "15px" }}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            style={{ padding: "10px", width: "250px", borderRadius: "5px" }}
          />
          {errors.name && (
            <div style={{ color: "red", marginTop: "5px" }}>{errors.name}</div>
          )}
        </div>

        {/* Email */}
        <div style={{ marginBottom: "15px" }}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            style={{ padding: "10px", width: "250px", borderRadius: "5px" }}
          />
          {errors.email && (
            <div style={{ color: "red", marginTop: "5px" }}>{errors.email}</div>
          )}
        </div>

        {/* Password */}
        <div style={{ marginBottom: "15px" }}>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            style={{ padding: "10px", width: "250px", borderRadius: "5px" }}
          />
          {errors.password && (
            <div style={{ color: "red", marginTop: "5px" }}>
              {errors.password}
            </div>
          )}
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            backgroundColor: "#4CAF50",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
