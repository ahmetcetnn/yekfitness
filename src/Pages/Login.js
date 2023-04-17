import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firesbase";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className=" flex flex-col items-center justify-center lg:bg-cover bg-right bg-no-repeat    "
    style={{ backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/787/610/414/muscle-press-pose-athlete-workout-hd-wallpaper-preview.jpg')" }}>
    
        
      <form onSubmit={handleLogin}>
        <div className="justify-center text-center bg-cover h-screen items-center flex flex-col text-white"
        >
          <br></br>
          <input
            className="border-solid border text-black border-x-gray-900 lg:w-96 lg:h-12 w-72  rounded-md z-10 text-center"
            type="email"
            placeholder="Enter Your E-Mail."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            className="border-solid border text-black  border-x-gray-900 lg:w-96 lg:h-12 w-72 rounded-md mt-2 text-center"
            placeholder="Enter Your Password."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            className="border-solid border cursor-pointer bg-blue-600 text-white  mt-2 lg:w-96 lg:h-12 w-72 rounded-md"
            disabled={!email || !password}
            type="submit"
          >
            {" "}
            Log In
          </button>

          {error && (
            <span style={{ color: "red" }}>Wrong e-mail or password!</span>
          )}

          <p>
            Dont you have an account?{" "}
            <Link to="/register" className="hover:text-yellow-400">
              {" "}
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
