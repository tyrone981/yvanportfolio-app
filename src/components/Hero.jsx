'use client'; // Essential for client-side interactivity

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="pt-24 md:pt-0 min-h-[calc(100vh-80px)] flex items-center"> {/* Full viewport height minus navbar */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 sm:px-6 lg:px-8">
        {/* Text Content */}
        <div className="lg:col-span-7 place-self-center text-center lg:text-left">
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight'>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Tyrone',
                1000,
                'Web Developer',
                1000,
                'Mobile Developer',
                1000,
                'A BARBER',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block min-h-[60px] sm:min-h-[72px] text-white"
              aria-label="Animated profession titles"
            />
          </h1>
          
          <p className='text-[#adb7be] text-lg sm:text-xl mb-8 max-w-lg mx-auto lg:mx-0'>
            I'm a Full Stack Developer passionate about building innovative digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              className='px-8 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 text-white transition-all duration-300 shadow-lg hover:shadow-xl'
              aria-label="Hire me"
            >
              Hire me
            </button>
            <button 
              className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition-all duration-300'
              aria-label="Download CV"
            >
              <span className="block bg-[#121212] hover:bg-[#181818] rounded-full px-5 py-2 transition-all duration-300">
                Download CV
              </span>
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className='lg:col-span-5 place-self-center mt-8 lg:mt-0'>
          <div className='relative w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] mx-auto'>
            <div className='absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse'></div>
            <div className='relative rounded-full bg-[#181818] w-full h-full overflow-hidden border-2 border-[#33353F]'>
              <Image
                src="/image/Tyrone.png"
                alt="Tyrone - Full Stack Developer"
                width={350}
                height={350}
                priority
                className='absolute top-0 left-0 w-full h-full object-cover'
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;