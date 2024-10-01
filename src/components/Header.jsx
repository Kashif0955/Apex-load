"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom"; 
import { FaBars, FaTruck, FaBoxOpen, FaUsers, FaInfoCircle } from 'react-icons/fa'; // Importing icons
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
        <div className="absolute left-0 mt-2 w-48 rounded-md bg-black-600 z-50">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="block px-4 py-2 text-white hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </div>
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
      icon: <FaTruck />, // Add an icon for the item
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
      icon: <FaInfoCircle />,
      href: "/about",
      label: "About Us",
    },
    {
      title: "Resources",
      icon: <FaInfoCircle />,
      items: [{ href: "/partner-marketplace", label: "Partner Market Place" }],
    },
  ];

  const NavContent = ({ isMobile }) => (
    <>
      {navItems.map((item) => {
        return item.href ? (
          <Link key={item.title} to={item.href} className="text-white relative group flex items-center">
            {item.icon}
            <span className="ml-2">{item.title}</span>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ) : (
          <DropdownLink key={item.title} title={item.title} items={item.items} />
        );
      })}
    </>
  );

  return (
    <nav className="w-full bg-black text-white sticky top-0 z-50">
      <div className="mx-auto px-4 lg:px-10">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-10">
            <Link to="/">
              <img
                src="src/assets/images/logo.svg"
                alt="Apex Loads Logo"
                className="w-[210px] h-[66px]"
              />
            </Link>
            <div className="hidden md:flex space-x-6">
              <NavContent />
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/pricing" className="btn-black">
              Pricing
            </Link>
            <Link to="/contact" className="btn-demo">
              Book a Demo
            </Link>
          </div>
          <div className="md:hidden">
            <button 
              className="text-white" 
              onClick={() => setIsMenuOpen((prev) => !prev)} // Toggle mobile menu
            >
              <FaBars /> {/* Hamburger icon */}
            </button>
          </div>
        </div>
        {/* Mobile View */}
        {isMenuOpen && ( // Render mobile menu if open
          <div className={`md:hidden bg-black-600`}>
            <NavContent isMobile />
            <div className="flex flex-col">
              <Link to="/pricing" className="text-white py-2 px-4 hover:bg-gray-700">
                Pricing
              </Link>
              <Link to="/contact" className="text-white py-2 px-4 hover:bg-gray-700">
                Book a Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
