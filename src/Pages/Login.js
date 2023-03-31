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
    <div className="container flex flex-col items-center   ">
      
      <form onSubmit={handleLogin}>
        <div className="justify-center text-center items-center flex flex-col text-white">
          <br></br>
          <input
            className="border-solid border text-black border-x-gray-900 w-96 h-12 mt-56 rounded-md"
            type="email"
            placeholder="Enter Your E-Mail."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            className="border-solid border border-x-gray-900 w-96 h-12 rounded-md mt-2"
            placeholder="Enter Your Password."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            className="border-solid border cursor-pointer bg-white text-slate-800 mt-2 w-96 h-12 rounded-md"
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
            <Link to="/register" className="hover:text-sky-700">
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
