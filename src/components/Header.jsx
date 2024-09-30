import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    {
      title: "Transporters",
      items: [
        { href: "/post-truck", label: "Post Truck" },
        { href: "/search-loads", label: "Search for Loads" },
        { href: "/eac-profile", label: "EAC Profile" },
      ],
    },
    {
      title: "Hybrid",
      items: [
        { href: "/post-truck", label: "Post Truck" },
        { href: "/post-load", label: "Post a Load" },
        { href: "/search-loads", label: "Search for Loads" },
        { href: "/search-trucks", label: "Search for Trucks" },
      ],
    },
    {
      title: "Brokers/Forwarders",
      items: [
        { href: "/post-load", label: "Post a Load" },
        { href: "/search-trucks", label: "Search for Trucks" },
      ],
    },
    {
      title: "Products",
      items: [
        { href: "/load-board", label: "Load Board" },
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

  const renderMenu = (items) => (
    <Menu>
      {items.map((item) => (
        <Menu.Item key={item.href}>
          <Link to={item.href}>{item.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <nav className="w-full bg-black text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/">
          <img
            src="/pictures/apexloads1.svg"
            alt="Apex Loads Logo"
            className="w-[150px] h-auto"
          />
        </Link>
        <div className="flex items-center space-x-4">
          {navItems.map((item) => (
            <div key={item.title}>
              {item.items ? (
                <Dropdown
                  overlay={renderMenu(item.items)}
                  trigger={['click']}
                  onClick={() => toggleDropdown(item.title)}
                >
                  <Button>
                    {item.title} <DownOutlined />
                  </Button>
                </Dropdown>
              ) : (
                <Link to={item.href} className="text-white">
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link to="/pricing">
            <Button className="bg-white text-red-600 rounded-md">Pricing</Button>
          </Link>
          <Link to="/contact">
            <Button className="bg-red-600 text-white rounded-md">Book a Demo</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
