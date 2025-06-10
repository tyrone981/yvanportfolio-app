import React from "react";
import Image from 'next/image';
import { FaContact } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        
        <Image
           src="/image/fyn.png"  // Path relative to /public
           alt="Portfolio Logo"
           width={40}
           height={40}  // Required
           priority={false}  // Optional
/>

        <span></span>
        <p className="text-slate-600">All rights reserved.2025</p>
      </div>
    </footer>
  );
};

export default Footer;