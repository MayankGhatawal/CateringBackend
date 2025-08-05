import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import logo from "../public/images/mainlogo.png";
import { StickyQuoteButton } from "../components/sticky-quote-button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [openInquiry, setOpenInquiry] = useState(false); // ✅ for popup
  const dropdownTimeoutRef = useRef(null);
  const { pathname } = useLocation();
  const dropdownRef = useRef(null);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services & Technology", hasDropdown: true },
    { to: "/technology", label: "Technology" },
    { to: "/industries", label: "Industries" },
    { to: "/client", label: "Client" },
    { to: "/contact", label: "Contact" },
  ];

  const serviceDropdownItems = [
    { label: "Wastewater treatment", to: "/services/wastewater-treatment" },
    { label: "Water treatment", to: "/services/water-treatment" },
    { label: "Solid waste treatment", to: "/services/solid-waste-treatment" },
    { label: "Air scrubber", to: "/services/air-scrubber" },
    { label: "Repair & maintenance", to: "/services/repair-maintenance" },
    { label: "Operation & maintenance", to: "/services/operation-maintenance" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCall = () => {
    window.location.href = "tel:+919728710720";
  };

  const handleEmail = () => {
    window.location.href = "mailto:varshaenvirocare@gmail.com";
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div onClick={handleCall} className="flex items-center gap-2 cursor-pointer hover:text-green-400">
              <Phone className="w-4 h-4" />
              <span>+91-9728710720</span>
            </div>
            <div onClick={handleEmail} className="flex items-center gap-2 cursor-pointer hover:text-blue-300">
              <Mail className="w-4 h-4" />
              <span>varshaenvirocare@gmail.com</span>
            </div>
          </div>
          <span className="hidden md:block text-gray-300">Trusted Environmental Solutions Since Years</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-white sticky top-0 z-50 shadow-md rounded-xl mx-2 transition-all ${scrolled ? "py-1" : "py-2"}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center h-12">
              <img src={logo} alt="Varsha Enviro Logo" className="h-28 w-auto object-contain" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => {
                      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
                      setDropdownOpen(true);
                    }}
                    onMouseLeave={() => {
                      dropdownTimeoutRef.current = setTimeout(() => {
                        setDropdownOpen(false);
                      }, 300);
                    }}
                    ref={dropdownRef}
                  >
                    <button className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
                      {item.label}
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                    {dropdownOpen && (
                      <div
                        className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md z-50"
                        onMouseEnter={() => {
                          if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
                          setDropdownOpen(true);
                        }}
                        onMouseLeave={() => {
                          dropdownTimeoutRef.current = setTimeout(() => {
                            setDropdownOpen(false);
                          }, 300);
                        }}
                      >
                        {serviceDropdownItems.map((sub, index) => (
                          <Link
                            key={index}
                            to={sub.to}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`text-sm font-medium px-1 border-b-2 ${
                      pathname === item.to
                        ? "text-blue-600 border-blue-600"
                        : "text-gray-700 border-transparent hover:border-blue-500 hover:text-blue-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}

              {/* Inquiry Button (Desktop) */}
              <button
                onClick={() => setOpenInquiry(true)}
                className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition-all"
              >
                Inquiry
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-slate-800 hover:text-blue-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden py-2">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.label} className="px-4 py-2">
                    <button
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      className="flex justify-between w-full text-sm font-medium text-slate-700"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileDropdownOpen && (
                      <div className="pl-4 mt-2 space-y-1">
                        {serviceDropdownItems.map((sub, index) => (
                          <Link
                            key={index}
                            to={sub.to}
                            onClick={() => setIsOpen(false)}
                            className="block text-sm text-slate-600 hover:text-blue-600"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 px-4 rounded-md text-sm font-medium transition-all ${
                      pathname === item.to
                        ? "text-blue-600 bg-blue-50"
                        : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}

              {/* Inquiry Button (Mobile) */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setOpenInquiry(true);
                }}
                className="block w-full text-center mt-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all"
              >
                Inquiry
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Inquiry Popup Form */}
     <StickyQuoteButton open={openInquiry} setOpen={setOpenInquiry} />

    </>
  );
}
