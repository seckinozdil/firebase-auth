import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { firebaseLogin, firebaseRegister } from "../firebase";
import { login } from "../redux/authSlice";
import { useDispatch } from "react-redux";

const RegisterLogin = ({ pageName }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const user = await firebaseRegister(email, password);
    console.log(user);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = await firebaseLogin(email, password);
    dispatch(login(user));
    navigate('/home', {replace: true})
  };
  return (
    <>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          onSubmit={pageName === "RegisterPage" ? handleRegister : handleLogin}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                <Link to="/forgot_pass">Forgot Password?</Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {pageName === "RegisterPage" ? "Sign in" : "Login"}
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          {pageName === "RegisterPage" ? (
            <Link
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              to="/"
            >
              Already have an account? Login
            </Link>
          ) : (
            <Link
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              to="/register"
            >
              Create Account
            </Link>
          )}
        </p>
      </div>
    </>
  );
};

export default RegisterLogin;
