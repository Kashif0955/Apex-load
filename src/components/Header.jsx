import React, { useState } from 'react';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});

  const toggleDropdown = (index) => {
    setDropdownOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest('.nav-list')) {
      setDropdownOpen({});
      setIsOpen(false);
    }
  };

  return (
    <section className="navigation" onClick={handleOutsideClick}>
      <div className="nav-container">
        <div className="brand">
          <img src="src/assets/images/logo.svg" alt="Logo" />
        </div>
        <div className="nav-mobile">
          <a id="nav-toggle" href="#!" onClick={toggleNav}>
            <span></span>
          </a>
        </div>
        <nav>
          <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
            <li>
              <a href="#!" onClick={() => toggleDropdown(1)}>
                Transporters
              </a>
              <ul className={`nav-dropdown ${dropdownOpen[1] ? 'open' : ''}`}>
                <li>
                  <a href="#!">Post Trucks</a>
                </li>
                <li>
                  <a href="#!">Search for Loads</a>
                </li>
                <li>
                  <a href="#!">EOS Profile</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#!" onClick={() => toggleDropdown(2)}>
                Hybrid
              </a>
              <ul className={`nav-dropdown ${dropdownOpen[2] ? 'open' : ''}`}>
                <li>
                  <a href="#!">Post Trucks</a>
                </li>
                <li>
                  <a href="#!">Search for Loads</a>
                </li>
                <li>
                  <a href="#!">EOS Profile</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#!" onClick={() => toggleDropdown(3)}>
                Brokers/Forwarders
              </a>
              <ul className={`nav-dropdown ${dropdownOpen[3] ? 'open' : ''}`}>
                <li>
                  <a href="#!">Post Trucks</a>
                </li>
                <li>
                  <a href="#!">Search for Loads</a>
                </li>
                <li>
                  <a href="#!">EOS Profile</a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="nav-buttons">
          <button className="nav-button1">Pricing</button>
          <button className="nav-button">Book Demo</button>
        </div>
        </nav>
       
      </div>
    </section>
  );
}

export default Navigation;
