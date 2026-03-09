import React, { useState } from "react";
import { createAdminApi } from "../services/authService";
import Navbar from "../components/Navbar";

function CreateAdmin() {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try{

      await createAdminApi({
        username,
        password,
        name,
        email
      });

      alert("Admin Created Successfully");

      setUsername("");
      setPassword("");
      setName("");
      setEmail("");

    }catch(error){

      console.log(error);
      alert("Error Creating Admin");

    }

  };

  return (

    <div>

      <Navbar/>

      <div className="flex justify-center items-center h-screen bg-gray-100">

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 shadow-xl rounded-lg w-96"
        >

          <h2 className="text-2xl font-bold mb-6 text-center">
            Create Admin
          </h2>

          <input
            type="text"
            placeholder="Username"
            className="border p-2 w-full mb-4 rounded"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-2 w-full mb-4 rounded"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <input
            type="text"
            placeholder="Full Name"
            className="border p-2 w-full mb-4 rounded"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="border p-2 w-full mb-4 rounded"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <button
            type="submit"
            className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600"
          >
            Create Admin
          </button>

        </form>

      </div>

    </div>

  );
}

export default CreateAdmin;