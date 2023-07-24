import React, { useState } from "react";
import "./App.css";

const App = () => {
  // Using useState hooks to handle state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    // Form validation
    let formErrors = {};

    if (!name) {
      formErrors.name = "Name is required*";
    }

    if (!email) {
      formErrors.email = "Email is required*";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Invalid email format";
    }

    if (!password) {
      formErrors.password = "Password is required*";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    
    console.log("Form submitted successfully:", formData);

    // Clear form fields and errors
    setFormData({
      name: "",
      email: "",
      password: "",
    });

    setErrors({
      name: "",
      email: "",
      password: "",
    });

    
    alert("Your registration is successful!");
  };

  return (
    <div className="App flex flex-col items-center justify-center">
      <h1 className="text-4xl w-full uppercase font-bold text-center mt-0 px-20 py-6 text-uppercase text-white bg-black">
        User Registration Form
      </h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group text-3xl font-medium  m-[15px]">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="rounded-[10px] text-xl w-[330px] ml-[10px] border-gray-600 shadow-md border border-solid"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && (
            <span className="error text-red-500 text-[20px] ml-[10px]">
              {errors.name}
            </span>
          )}
        </div>

        <div className="form-group text-3xl font-medium m-[15px]">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="rounded-[10px] text-xl w-[338px] ml-[10px] shadow-md border-gray-600 border border-solid"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && (
            <span className="error text-red-500 text-[20px] ml-[10px]">
              {errors.email}
            </span>
          )}
        </div>

        <div className="form-group text-3xl font-medium  m-[15px]">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            className="rounded-[10px] w-[283px] text-xl shadow-md ml-[10px] border-gray-600 border border-solid"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && (
            <span className="error text-red-500 text-[20px] ml-[10px]">
              {errors.password}
            </span>
          )}
        </div>

        <button
          type="submit"
          id="register-btn"
          className="ml-4 p-[10px] rounded-[5px] text-white bg-black "
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default App;
