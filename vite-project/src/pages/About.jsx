import React from "react";
import Navbar from "../components/Navbar";

function About() {

  return (

    <div>

      <Navbar />

      <div className="p-10">

        <h1 className="text-3xl font-bold">About Us</h1>

        <p className="mt-4">
          This application is built using React and Spring Boot.
        </p>

      </div>

    </div>

  );

}

export default About;