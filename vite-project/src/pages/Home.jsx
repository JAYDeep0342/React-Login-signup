import React from "react";
import Navbar from "../components/Navbar";

function Home() {

  return (

    <div>

      <Navbar/>

      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">

        <h1 className="text-4xl font-bold mb-4">
          Welcome to My Application
        </h1>

        <p className="text-lg text-gray-600">
          This is the Home Page
        </p>

      </div>

    </div>

  );

}

export default Home;