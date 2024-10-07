import React from "react";
import { IoIosMenu } from "react-icons/io";
import logo from "../assets/Facebook-Logosu.png";
import meta from "../assets/Meta-Logo.png";
const Header = () => {
  return (
    <div className="container mx-auto">
      {/* <img src={meta} alt="" className="w-24 ml-4" /> */}
      <div className="w-full h-16 flex items-center justify-between pl-2 pr-4 shadow-md shadow-gray-100">
        <img src={logo} className="w-14" alt="" />
        <IoIosMenu size={27} />
      </div>
    </div>
  );
};

export default Header;
