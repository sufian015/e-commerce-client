import React, { useState } from "react";
import Jumbotron from "../../components/cards/Jumbotron";
import toast from "react-hot-toast";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //import.meta.env.VITE_LOCAL_URL

    try {
      const apiUrl=import.meta.env.VITE_API_URL;

      const {data}=await axios.post(`${apiUrl}/register`,
      {
        name,
        email,
        password

      });
      
    console.log(data);

    if(data?.error){
      toast.error(data.error)
    }
    else{
      toast.success("Registration successful");
    }
      
    } catch (err) {

      console.log(err)
      toast.error("Registration failed. Try again.");
     

    }


  };

  return (
    <div>
      <Jumbotron title="Register page" />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                className="form-control mb-4 p-2"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
              <input
                type="email"
                className="form-control mb-4 p-2"
                name="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="form-control mb-4 p-2"
                name="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
