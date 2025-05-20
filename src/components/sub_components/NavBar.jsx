// ---------------------- React & Router Imports ----------------------
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

// ---------------------- Assets ----------------------
import BookVerseLogo from "../../assets/bookverseLogo.png";

// ---------------------- Icons ----------------------
import { CreditCardIcon, ShoppingCart, User } from "lucide-react";

// ---------------------- Context ----------------------
import { CreateMainContext } from "../../MainContext";

// ---------------------- Toast Notifications ----------------------
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ---------------------- NavBar Component ----------------------
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Toggle for mobile menu
  const { cartItems } = useContext(CreateMainContext); // Access cart items from global context

  // Navigation links
  const links = [
    { linkName: "home", linkTo: "/home" },
    { linkName: "products", linkTo: "/products" },
    { linkName: "membership", linkTo: "/membership" },
    { linkName: "about", linkTo: "/about" },
    { linkName: "MyWishList", linkTo: "/mywishlist" },
    { linkName: "Admin", linkTo: "/admin/dashboard" },
  ];

  // // If user is admin, add admin link
  // const accountType = localStorage.getItem("accountType");
  // if (accountType === "admin") {
  //   links.push({ linkName: "Admin", linkTo: "/admin" });
  // }

  // Close mobile menu after clicking a link
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gray-900 px-4 py-3 flex items-center justify-between sticky top-0 z-40">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img
          src={BookVerseLogo}
          alt="Logo"
          className="w-12 lg:w-16 aspect-square"
        />
        <p className="text-xl lg:text-3xl font-extrabold uppercase text-white">
          bookverse
        </p>
      </div>

      {/* Hamburger menu for small screens */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-white text-3xl md:hidden focus:outline-none"
      >
        ☰
      </button>

      {/* Navigation Links */}
      <div
        className={`min-w-1/2 ${
          menuOpen ? "block absolute top-16 left-0 w-full" : "hidden"
        } bg-gray-800 p-4 md:static md:flex md:items-center md:justify-between md:gap-10 md:bg-transparent md:p-0`}
      >
        {/* Nav Links */}
        <ul className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          {links.map((item, index) => (
            <li key={index} className="list-none">
              <NavLink
                to={item.linkTo}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 uppercase font-bold hover:text-blue-400"
                    : "text-white uppercase font-bold hover:text-blue-400"
                }
                onClick={handleLinkClick}
              >
                {item.linkName}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Icon Buttons Section */}
        <div className="flex gap-6 mt-4 md:mt-0 items-center justify-center">
          {/* Checkout */}
          <NavLink
            to={"/checkout"}
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 uppercase font-bold hover:text-blue-400"
                : "text-white uppercase font-bold hover:text-blue-400"
            }
            onClick={handleLinkClick}
          >
            <CreditCardIcon className="text-2xl hover:cursor-pointer hover:text-orange-400" />
          </NavLink>

          {/* Cart with item count */}
          <div className="relative">
            <NavLink
              to={"/cart"}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold hover:text-blue-400"
                  : "text-white uppercase font-bold hover:text-blue-400"
              }
              onClick={handleLinkClick}
            >
              <ShoppingCart className="text-2xl hover:cursor-pointer hover:text-orange-400" />
            </NavLink>
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          </div>

          {/* Profile */}
          <NavLink
            to={"/profile"}
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 uppercase font-bold hover:text-blue-400"
                : "text-white uppercase font-bold hover:text-blue-400"
            }
            onClick={handleLinkClick}
          >
            <User className="text-2xl hover:cursor-pointer hover:text-orange-400" />
          </NavLink>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </nav>
  );
};

export default NavBar;
