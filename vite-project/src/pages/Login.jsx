import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div>

      <h2>Login Page</h2>

      <form onSubmit={handleSubmit}>

        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />

        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />

        <Button title="Login" />

      </form>

    </div>
  );

}

export default Login;