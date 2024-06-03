import React, { useEffect, useState } from "react";
import { IoIosArrowUp, IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [dropdownHovered, setDropdownHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full font-medium text-zinc-700 fixed transition-all duration-[2000ms] z-50 ${
        isScrolled ? "bg-white shadow-md" : " sticky"
      }`}
    >
      <nav className="flex h-auto py-5 justify-between items-center relative">
        <div className="flex items-center">
          <Link to="/">
            <img
              className="w-24 h-auto ml-32 cursor-pointer"
              src="https://www.benow.in/assets/img/logo.png"
              alt="Benow logo"
            />
          </Link>
        </div>
        <div className="flex-1">
          <ul className="hidden lg:flex justify-center gap-10 text-lg">
            <li className="transition-transform duration-300 ease-in-out hover:scale-125 hover:text-red-600">
              <Link to="/">Home</Link>
            </li>
            <li className="transition-transform duration-300 ease-in-out hover:scale-125 hover:text-red-600">
              <Link to="/about">The Benow Story</Link>
            </li>
            <li className="transition-transform duration-300 ease-in-out hover:scale-125 hover:text-red-600">
              <Link to="/culture">Culture</Link>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="flex items-center">
                <Link
                  to="/careers"
                  className="flex items-center transition-transform duration-300 ease-in-out hover:scale-125 hover:text-red-600"
                >
                  Careers
                  <span
                    className={`ml-1 font-semibold flex items-center transition-transform duration-300 ease-in-out ${
                      isHovered || dropdownHovered ? "rotate-180" : ""
                    }`}
                  >
                    <IoIosArrowUp />
                  </span>
                </Link>
                {(isHovered || dropdownHovered) && (
                  <ul
                    className="absolute left-0 top-7 rounded-lg ml-2 whitespace-nowrap text-sm bg-white text-zinc-700 p-2 shadow-md"
                    onMouseEnter={() => setDropdownHovered(true)}
                    onMouseLeave={() => setDropdownHovered(false)}
                  >
                    <li className="my-3 text-lg pr-4 hover:text-red-600">
                      <Link to="/career-openings">Career Openings</Link>
                    </li>
                    <li className="my-3 text-lg pr-4 hover:text-red-600">
                      <Link to="/internships">Internships</Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li className="transition-transform duration-300 ease-in-out hover:scale-125  hover:text-red-600">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          {/* Hamburger Menu */}
          <div className="lg:hidden absolute top-0 right-0 mt-4 mr-4">
            <button
              className="focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <IoIosMenu className="w-8 h-8" />
            </button>
            {isMenuOpen && (
              <div className="absolute top-16 right-0 z-50 bg-white whitespace-nowrap rounded-lg shadow-md p-4">
                <ul className="flex flex-col gap-4">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">The Benow Story</Link>
                  </li>
                  <li>
                    <Link to="/culture">Culture</Link>
                  </li>
                  <li>
                    <Link to="/careers">Careers</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div
        className="fixed bottom-10 right-10 cursor-pointer bg-red-600 text-white p-3 rounded-full shadow-md"
        onClick={scrollToTop}
      >
        <IoIosArrowUp />
      </div>
    </header>
  );
}

export default Navbar;
