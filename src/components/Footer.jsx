import React, { useState } from "react";
import { FaLinkedin, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";

export default function FooterSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const sections = [
    {
      title: "Links",
      items: [
        "About Us",
        "Pricing",
        "Log in",
        "Contact Us",
        "FAQs",
        "Privacy Policy",
      ],
    },
    {
      title: "Transporters",
      items: ["Post trucks", "Search for loads"],
    },
    {
      title: "Brokers/ Freight-Forwarders",
      items: ["Post a load", "Search for trucks"],
    },
    {
      title: "Hybrid",
      items: [
        "Post a load",
        "Search for loads",
        "Post truck",
        "Search for trucks",
      ],
    },
    {
      title: "Products",
      items: ["load board", "TRM", "EAC profile", "Invoice Factoring"],
    },
  ];

  const socialItems = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/company/apexloads/mycompany/",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/apexloads/",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      link: "https://web.facebook.com/Apexloads/",
    },
    { name: "Twitter", icon: <FaTwitter />, link: "https://x.com/apexloads" },
  ];

  const createSectionLink = (item) => {
    switch (item.toLowerCase()) {
      case "about us":
        return "/about";
      case "privacy policy":
        return "/privacy-policy";
      case "faqs":
        return "/faqs";
      case "log in":
        return "https://app.apexloads.com/";
      case "pricing":
        return "/pricing";
      case "contact us":
        return "/contact";
      case "post truck":
        return "https://app.apexloads.com/truck/new";
      case "search for loads":
        return "https://app.apexloads.com/load";
      case "post a load":
        return "https://app.apexloads.com/load/new";
      case "search for trucks":
        return "https://app.apexloads.com/truck";
      case "eac profile":
        return "https://eacprofile.com/";
      case "trm":
        return "https://app.apexloads.com/";
      case "load board":
        return "https://app.apexloads.com/load/new";
      case "invoice factoring":
        return "https://asapfactoring.com/";
      default:
        return "/";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Support Request from Website");
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}`);
    window.location.href = `mailto:tacjohnrobin@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer className="bg-[#171715] text-white font-sans">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <img
              src="src/assets/images/logo.svg"
              alt="Apex Loads Logo"
              width={200}
              height={28}
            />
            <p className="text-[#8F9FA3] text-sm">
              Apexloads is an online load board that connects cargo owners with
              transporters to streamline the freight-truck matching process and
              facilitate faster payments.
            </p>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Seeking personalized support?
              </h3>
              <p className="text-[#8F9FA3] mb-4">
                Request a call from our team
              </p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-transparent border border-gray-600 p-2 w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-transparent border border-gray-600 p-2 w-full"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <button
                  type="submit"
                  className="w-full bg-[#D91E27] hover:bg-[#B81821] text-white p-2"
                >
                  Send a Request
                </button>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:col-span-2">
            {sections.map((section, index) => (
              <div key={index} className="mb-6 md:mb-0">
                <h2 className="text-lg font-bold uppercase mb-4">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i}>
                      <a
                        href={createSectionLink(item)}
                        className="text-gray-400 hover:text-white transition-colors no-underline"
                        >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4">
            <MdPhone className="h-6 w-6 text-[#D91E27]" />
            <span className="text-xl font-bold"> +254 (0) 709 677 400</span>
          </div>
          <div className="flex items-center space-x-4">
            <MdEmail className="h-6 w-6 text-[#D91E27]" />
            <span className="text-xl font-bold">info@apexloads.com</span>
          </div>
          <div className="flex items-start space-x-4">
            <GiPositionMarker className="h-6 w-6 text-[#D91E27] mt-1" />
            <span className="text-gray-400">
              Gill House, 1st floor, Room 5A,
              <br />
              Moi Avenue, Nairobi, Kenya
            </span>
          </div>
        </div>

        <div className="mt-9 pt-8 flex:row py-2 border-t border-gray-800 md:flex justify-between">
          <div className="flex justify-center space-x-4 text-gray-400 text-14 font-neue-plak font-semibold ">
            © 2024 — Copyright
          </div>
          <div className="flex justify-center my-3 md:my-0 font-semibold">
            <p>
              <a
                href="/terms-and-conditions"
                className="text-gray-500 hover:text-gray-300 hover:underline "
              >
                {" Terms and Conditions "}
              </a>
              apply
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            {socialItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {item.icon}
                <span className="sr-only">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
