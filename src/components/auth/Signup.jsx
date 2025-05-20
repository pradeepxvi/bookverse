// react tools
import { useState } from "react";

// logo
import { Logo } from "../../";

// navlinks from router-dom
import { NavLink, useNavigate } from "react-router-dom";

// axios for fetching APIs
import axios from "axios";

// tools for notification
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const naviagte = useNavigate();
  const [firstName, setFirstName] = useState("john");
  const [lastName, setLastName] = useState("doe");
  const [email, setEmail] = useState("helloo@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("980000000000");
  const [password, setPassword] = useState("Hell00;;@@");
  const [confirmPassword, setConfirmPassword] = useState("Hell00;;@@");

  // simple validation
  const validateSignup = (
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    confirmPassword
  ) => {
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !phoneNumber.trim() ||
      !password ||
      !confirmPassword
    ) {
      notify("Please fill in all fields.");
      return false;
    }

    // Email validation regex (simple standard)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast("Please enter a valid email address.");
      return false;
    }

    // Phone number validation: digits only, 10-15 digits (adjust if needed)
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast("Please enter a valid phone number (10-15 digits).");
      return false;
    }

    if (password.length < 6) {
      toast("Password must be at least 6 characters.");
      return false;
    }

    if (password !== confirmPassword) {
      toast("Passwords do not match.");
      return false;
    }

    return true;
  };

  // handle on register
  const handleSignup = (event) => {
    event.preventDefault();
    naviagte("/signin");
  };

  // register form
  return (
    <section className="bg-blue-900 dark:bg-gray-900 min-h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
        <div className="w-full mb-5">
          <Logo />
        </div>

        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create your account
            </h1>

            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSignup}
              method="POST"
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  First Name
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="First Name"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Last Name"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-bold text-gray-900 dark:text-white">
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
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="bg-gray-50 border border-gray-300 font-bold text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Phone Number"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Password"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Confirm Password"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-black hover:bg-gray-100 hover:text-black   font-medium rounded-lg text-sm px-5 py-2.5 text-center  cursor-pointer  "
              >
                Sign up
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <NavLink
                  to="/signin"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign in
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Signup;
