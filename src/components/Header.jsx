"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom"; 
import { FaBars, FaTruck, FaBoxOpen, FaUsers, FaInfoCircle } from 'react-icons/fa'; // Importing icons
import { motion } from "framer-motion"; // Import framer-motion for animations
import '../assets/styles/button.css';

const DropdownLink = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <div className="relative group">
      <button
        className="text-white bg-black-600 hover:underline"
        onClick={toggleDropdown}
      >
        {title}
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="absolute left-0 mt-2 w-48 rounded-md bg-black-600 z-50"
        >
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="block px-4 py-2 text-white hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
};

// Main NavBar Component
export default function NavBar() {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    {
      title: "Transporters",
      icon: <FaTruck />,
      items: [
        { href: "/post-truck", label: "Post truck" },
        { href: "/search-loads", label: "Search for loads" },
        { href: "/eac-profile", label: "EAC Profile" },
      ],
    },
    {
      title: "Hybrid",
      icon: <FaBoxOpen />,
      items: [
        { href: "/post-truck", label: "Post truck" },
        { href: "/post-load", label: "Post a load" },
        { href: "/search-loads", label: "Search for loads" },
        { href: "/search-trucks", label: "Search for trucks" },
        { href: "/eac-profile", label: "EAC Profile" },
      ],
    },
    {
      title: "Brokers/Forwarders",
      icon: <FaUsers />,
      items: [
        { href: "/post-load", label: "Post a load" },
        { href: "/search-trucks", label: "Search for trucks" },
        { href: "/eac-profile", label: "EAC Profile" },
      ],
    },
    {
      title: "Products",
      icon: <FaInfoCircle />,
      items: [
        { href: "/load-board", label: "Load board" },
        { href: "/trm", label: "TRM" },
        { href: "/eac-profile", label: "EAC Profile" },
        { href: "/invoice-factoring", label: "Invoice Factoring" },
      ],
    },
    {
      title: "About Us",
      href: "/about",
      label: "About Us",
    },
    {
      title: "Resources",
      items: [{ href: "/partner-marketplace", label: "Partner Market Place" }],
    },
  ];

  const NavContent = ({ isMobile }) => (
    <>
      {navItems.map((item) => {
        return item.items ? (
          <DropdownLink key={item.title} title={item.title} items={item.items} />
        ) : (
          <Link key={item.title} to={item.href} className="text-white hover:underline">
            {item.label || item.title}
          </Link>
        );
      })}
    </>
  );

  return (
    <nav className="w-full bg-black text-white shadow-lg">
      <div className="mx-auto px-[10px] lg:px-[60px]">
        <div className="flex justify-between items-center py-4">
          <Link to="/">
            <img src="src/assets/images/logo.svg" alt="Apex Loads Logo" className="w-[150px] h-[30px]" />
          </Link>
          <div className="hidden md:flex space-x-6">
            <NavContent />
        
            <Link to="/pricing" className="btn-black">Pricing</Link>
            <Link to="/book-demo" className="btn-demo">Book a Demo</Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              <FaBars size={24} />
            </button>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="absolute left-0 mt-2 w-48 bg-black-600 rounded-md z-50"
              >
                <NavContent isMobile />
                <Link to="/pricing" className="btn-black">Pricing</Link>
                <Link to="/book-demo" className="btn-demo">Book a Demo</Link>
              
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
