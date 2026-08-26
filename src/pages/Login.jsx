import React, { useState } from "react";
import bg from "../assets/bg.png";
import { Auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(Auth, email, password);
      alert("Login successfull");
      localStorage.setItem("IsLoggedIn", JSON.stringify(true));
      navigate("/");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="h-screen w-screen text-white flex justify-center items-center bg-cover"
    >
      <form className="flex flex-col border border-gray-300 py-30 px-15 rounded-3xl gap-3 backdrop-blur-md w-[30%] shadow-xl shadow-black/20">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-md text-gray-300">Welcome ! Login to continue</p>
        <input
          className="mt-8 p-3 rounded-xl border border-gray-300"
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
          required
        />
        <input
          className="mt-2 p-3 rounded-xl border border-gray-300"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          required
        />
        <button
          onClick={handlesubmit}
          className="mt-10 p-3 rounded-full bg-gradient-to-r from-[#43698a] to-[#837e7e] font-bold text-xl outline outline-transparent hover:cursor-pointer hover:outline-gray-300 transition-all"
        >
          Login
        </button>
        <p className="text-center text-gray-300">
          Don't have an account ?{" "}
          <span className="hover:underline hover:text-white hover:cursor-pointer transition-all">
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default login;
