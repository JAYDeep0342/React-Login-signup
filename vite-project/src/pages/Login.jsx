import React, { useState } from "react";
import { loginApi } from "../services/authService";
import Navbar from "../components/Navbar";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await loginApi({
        username,
        password
      });

      console.log(response.data);

      localStorage.setItem("token", response.data.Jwt);
      localStorage.setItem("userid", response.data.userid);

      alert("Login Success");

    } catch (error) {

      console.log(error);
      alert("Invalid Username or Password");

    }

  };

  return (
<div>
  <Navbar/>
    <div className="flex justify-center items-center h-screen bg-gray-100">

      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded w-80">

        <h2 className="text-2xl mb-4 text-center font-bold">Login</h2>

        <input
          type="text"
          placeholder="Username"
          className="border p-2 w-full mb-3 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-2 rounded"
        >
          Login
        </button>

      </form>

    </div>
    </div>

  );
}

export default Login;