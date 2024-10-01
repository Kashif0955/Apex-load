"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom"; // Replace with your routing method if different

// Dropdown Link Component
const DropdownLink = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <div className="relative group">
      <button
        className="text-white hover:bg-red-600 hover:underline"
        onClick={toggleDropdown}
      >
        {title}
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-md bg-red-600 z-50">
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

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    {
      title: "Transporters",
      items: [
        { href: "/post-truck", label: "Post truck" },
        { href: "/search-loads", label: "Search for loads" },
        { href: "/eac-profile", label: "EAC Profile" },
      ],
    },
    {
      title: "Hybrid",
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
      items: [
        { href: "/post-load", label: "Post a load" },
        { href: "/search-trucks", label: "Search for trucks" },
        { href: "/eac-profile", label: "EAC Profile" },
      ],
    },
    {
      title: "Products",
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
        return item.href ? (
          <Link key={item.title} to={item.href} className="text-white relative group">
            {item.label}
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ) : (
          <DropdownLink key={item.title} title={item.title} items={item.items} />
        );
      })}
    </>
  );

  return (
    <nav className="w-full bg-black text-white">
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
            <Link to="/pricing" className="bg-white text-red-600 rounded-[40px] px-4 py-2">
              Pricing
            </Link>
            <Link to="/contact" className="bg-red-600 text-white rounded-[40px] px-4 py-2">
              Book a Demo
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-white">Menu</button>
          </div>
        </div>
        {/* Mobile View */}
        <div className={`md:hidden`}>
          <NavContent isMobile />
        </div>
      </div>
    </nav>
  );
}
