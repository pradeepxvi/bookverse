// react tools
import { useState } from "react";

// logo
import { Logo } from "../../";

// navlinks from router-dom
import { NavLink, Navigate, useNavigate } from "react-router-dom";

// tools for notification
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("helloo@gmail.com");
  const [password, setPassword] = useState("Hell00;;@@");

  // simple validation for signin form
  const validateSignin = (email, password) => {
    if (!email || !password) {
      alert("Please fill in all fields.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      return false;
    }

    return true;
  };

  // handle on submitting the form
  const HandleLogin = async (event) => {
    // prevent default action
    event.preventDefault();
    navigate("/home");
    // check validations
    if (!validateSignin) return;
  };

  // login form
  return (
    // main screen
    <section className="bg-blue-900 dark:bg-gray-900 min-h-screen">
      {/* container of form */}
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto ">
        {/* display logo */}
        <div className="w-full mb-5 ">
          <Logo />
        </div>
        {/* form box */}
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Sign in to your account
            </h1>

            <form
              className="space-y-4 md:space-y-6"
              onSubmit={HandleLogin}
              method="POST"
            >
              <div>
                <label className="block mb-2  font-bold text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 font-bold text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="block mb-2  font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-black hover:bg-gray-300 hover:text-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer "
              >
                Log In
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                Don't have an account?
                <NavLink
                  to="/signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Signin;
