import React, { useState } from "react";

function Signup() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await signupApi({
        name: name,
        email: email,
        username: username,
        password: password
      });

      alert("Signup Success");

    } catch (error) {

      alert("Signup Failed");

    }

  };

  return (

    <div className="flex justify-center mt-20">

      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg w-80">

        <h2 className="text-2xl mb-4">Signup</h2>

        <input
          type="text"
          placeholder="Name"
          className="border p-2 w-full mb-3"
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Username"
          className="border p-2 w-full mb-3"
          onChange={(e)=>setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button className="bg-green-500 text-white w-full py-2">
          Signup
        </button>

      </form>

    </div>

  );
}

export default Signup;