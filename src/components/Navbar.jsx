'use client';


import react from "react"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Projects', path: '/projects' },
  { title: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) {
    return null;
  }

  const ThemeToggle = () => (
    <button 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={`p-2 rounded-md ${
        theme === 'dark' ? 'text-gray-400 hover:text-white hover:bg-[#33353F]' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200'
      } focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all`}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
    </button>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-opacity-95 py-2 shadow-lg' : 'bg-opacity-80 py-3'
    } ${
      theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <a href="/" className="flex items-center" onClick={() => setNavbarOpen(false)}>
            <Image
              src="/image/fyn.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full border-2 border-transparent hover:border-purple-500 transition-all"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={'/contact'}
                    className={`${
                      theme === 'dark' ? 'text-[#ADB7BE] hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    } px-3 py-2 rounded-md text-lg font-medium transition-colors relative group`}
                  >
                    {link.title}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className={`px-4 py-2 rounded-md ${
                    theme === 'dark' ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-purple-500 hover:bg-purple-600 text-white'
                  } transition-colors`}>
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className={`px-4 py-2 rounded-md ${
                    theme === 'dark' ? 'bg-transparent border border-purple-400 hover:bg-purple-900 text-purple-400' : 'bg-transparent border border-purple-500 hover:bg-purple-50 text-purple-600'
                  } transition-colors`}>
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "h-10 w-10",
                      userButtonPopoverCard: theme === 'dark' ? 
                        "bg-[#121212] border border-gray-800" : 
                        "bg-white border border-gray-200"
                    }
                  }}
                />
              </SignedIn>
            </div>

            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-2">
            <SignedIn>
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "h-8 w-8",
                  }
                }}
              />
            </SignedIn>
            
            <ThemeToggle />
            
            <button
              className={`p-2 rounded-md ${
                theme === 'dark' ? 'text-gray-400 hover:text-white hover:bg-[#33353F]' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200'
              } focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all`}
              onClick={() => setNavbarOpen(!navbarOpen)}
              aria-label={navbarOpen ? "Close menu" : "Open menu"}
            >
              {navbarOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {navbarOpen && (
        <div className={`md:hidden ${theme === 'dark' ? 'bg-[#000000]' : 'bg-gray-100'} shadow-xl`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">  
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.path}
                onClick={() => setNavbarOpen(false)}
                className={`block px-3 py-4 text-base font-medium ${
                  theme === 'dark' ? 'text-[#ADB7BE] hover:text-white hover:bg-[#33353F]' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'
                } transition-colors border-b ${
                  theme === 'dark' ? 'border-[#33353F]' : 'border-gray-200'
                }`}
              >
                {link.title}
              </Link>
            ))}
            <SignedOut>
              <div className="flex flex-col space-y-2 px-3 py-2">
                <SignInButton mode="modal">
                  <button className={`w-full px-4 py-2 rounded-md ${
                    theme === 'dark' ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-purple-500 hover:bg-purple-600 text-white'
                  } transition-colors`}>
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className={`w-full px-4 py-2 rounded-md ${
                    theme === 'dark' ? 'bg-transparent border border-purple-400 hover:bg-purple-900 text-purple-400' : 'bg-transparent border border-purple-500 hover:bg-purple-50 text-purple-600'
                  } transition-colors`}>
                    Sign Up
                  </button>
                </SignUpButton>
              </div>
            </SignedOut>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;