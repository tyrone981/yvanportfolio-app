import Link from "next/link";
import React from "react";
const NavLink = ({ href, title }) => {
  return ( 
  <Link
  href={"#about"}
  class="block py-2 pl-3 pr-4 text-[#ADB7BE]"
  >
   {title}
  </Link>
    {/* Contact Link */}
        <a
          href="/contact"
          className="cursor-pointer hover:text-fuchsia-300 transition duration-300"
        >
          Contact
        </a>
  );
};

export default NavLink;



