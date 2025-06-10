'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div className="rounded-xl overflow-hidden border-2 border-gray-700 hover:border-purple-500 transition-all duration-300">
      {/* Image Container with Hover Effect */}
      <div 
        className="h-52 md:h-72 relative group"
        style={{ 
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Overlay Effect */}
        <div className="overlay absolute inset-0 bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 flex items-center justify-center">
          {/* You can add hover content here if needed */}
        </div>
      </div>

      {/* Card Content */}
      <div className="bg-[#181818] p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;