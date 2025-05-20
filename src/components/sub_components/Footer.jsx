import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMailBulk,
  faMessage,
  faPersonMilitaryRifle,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

// FooterBooks component displays the Books section in the footer
const FooterBooks = () => {
  return (
    <>
      <div className="flex flex-col justify-start ">
        {/* Section title */}
        <h1 className="text-2xl font-bold text-white">Books</h1>
        {/* Section description */}
        <p className="text-sm font-medium text-white">
          Books Delivered Imagination Unlimited
        </p>
      </div>
    </>
  );
};

// FooterQuickLinks component displays navigation links in the footer
const FooterQuickLinks = () => {
  return (
    <>
      <div className="flex flex-col justify-start ">
        {/* Section title */}
        <h1 className="text-2xl font-bold text-white">Quick Links</h1>
        {/* Navigation links */}
        <ul className="flex flex-col">
          <NavLink to={"/"} className="text-white">
            Home
          </NavLink>
          <NavLink to={"/about"} className="text-white">
            About Us
          </NavLink>
          <NavLink to={"/"} className="text-white">
            Contact
          </NavLink>
        </ul>
      </div>
    </>
  );
};

// FooterContact component displays contact information in the footer
const FooterContact = () => {
  return (
    <>
      <div className="flex flex-col justify-start ">
        {/* Section title */}
        <h1 className="text-2xl font-bold text-white">Contact</h1>
        {/* Contact details list */}
        <ul className="flex flex-col gap-1">
          {/* Email */}
          <li className="flex items-center gap-2 text-white ">
            <FontAwesomeIcon icon={faEnvelope} color="white" />{" "}
            <span>msssonukr@gmail.com</span>
          </li>
          {/* Phone */}
          <li className="flex items-center gap-2 text-white ">
            <FontAwesomeIcon icon={faPhone} color="white" />{" "}
            <span>+91 7061543815</span>
          </li>
          {/* Address */}
          <li className="text-white">
            <p>MMEC, Mullana - 133207</p>
          </li>
        </ul>
      </div>
    </>
  );
};

// Main Footer component that combines all footer sections
const Footer = () => {
  return (
    <>
      {/* Footer container with responsive layout and background color */}
      <div className="bg-slate-900 w-full flex justify-around md:py-5 md:flex-row flex-col md:gap-0 gap-5 p-3 ">
        {/* Books section */}
        <FooterBooks className="" />
        {/* Quick Links section */}
        <FooterQuickLinks />
        {/* Contact section */}
        <FooterContact />
      </div>
    </>
  );
};

export default Footer;
