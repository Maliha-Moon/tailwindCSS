import React from "react";

const Navbar = () => {
  return (
    <nav className="px-4 py-4 bg-purple-900 text-white">
      <ul className="flex ">
        <li className="mx-2 cursor-pointer">About</li>
        <li className="mx-2 cursor-pointer">Contact</li>
        <li className="mx-2 cursor-pointer">Home</li>
      </ul>
    </nav>
  );
};

export default Navbar;
