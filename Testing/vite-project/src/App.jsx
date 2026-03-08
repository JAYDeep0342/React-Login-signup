import { useEffect } from "react";
import axios from "axios";

function App() {

  useEffect(() => {

    axios.post("http://localhost:8080/auth/login", {
      username: "jaydeep",
      password: "12345"
    })
    .then((response) => {
      console.log("API Response:", response.data);
    })
    .catch((error) => {
      console.error("API Error:", error);
    });

  }, []);

  return null; 
}

export default App;