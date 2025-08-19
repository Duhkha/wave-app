import React, { useState, useEffect } from "react";
import { useSidebar } from "../hooks/useSidebar";
import waveLogo from "../assets/wave.png";

const TopBar: React.FC = () => {
  const { isOpen, openSidebar, closeSidebar } = useSidebar();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("United States");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const countries = [
    { code: "US", name: "United States" },
    { code: "CA", name: "Canada" },
    { code: "GLOBAL", name: "Global" },
  ];

  const handleCountryChange = (countryName: string) => {
    setSelectedCountry(countryName);
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.country-dropdown')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-blue-50 border-b border-blue-100 flex items-center px-5 z-[1100]">
      {/* Mobile menu button */}
      <button
        className={`${isMobile ? 'flex' : 'hidden'} items-center justify-center w-10 h-10 bg-transparent border border-blue-100 rounded cursor-pointer mr-3 text-lg text-blue-900 hover:bg-blue-100 transition-colors`}
        onClick={() => isOpen ? closeSidebar() : openSidebar()}
      >
        ☰
      </button>
      
      {/* Logo */}
      <div className="flex items-center h-8">
        <img src={waveLogo} alt="Wave" className="h-8 w-auto" />
      </div>
      
      {/* Country Dropdown */}
      <div className="country-dropdown relative ml-auto">
        <button 
          className="flex items-center gap-2 px-3 py-2 bg-white border border-blue-100 rounded-md cursor-pointer text-sm text-blue-900 font-medium transition-colors hover:bg-blue-50"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span>{selectedCountry}</span>
          <svg 
            className={`w-3 h-3 text-blue-400 transition-transform duration-200 ${
              isDropdownOpen ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        <div 
          className={`absolute top-full right-0 mt-1 bg-white border border-blue-100 rounded-md shadow-lg z-[1200] min-w-[180px] transition-all duration-200 ${
            isDropdownOpen 
              ? 'opacity-100 visible translate-y-0' 
              : 'opacity-0 invisible -translate-y-2'
          }`}
        >
          {countries.map((country) => (
            <div
              key={country.code}
              className="px-4 py-2.5 cursor-pointer text-sm text-blue-900 border-b border-blue-50 last:border-b-0 transition-colors hover:bg-blue-50"
              onClick={() => handleCountryChange(country.name)}
            >
              {country.name}
              {selectedCountry === country.name && (
                <span className="text-blue-400 ml-2">✓</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;