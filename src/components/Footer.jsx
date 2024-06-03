import React, { useState, useEffect, useRef } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsFooterVisible(entry.isIntersecting);
    }, options);

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    // Cleanup
    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);
  return (
    <React.Fragment>
      <footer ref={footerRef} className="bg-[#404075] text-white">
        <div
          className={`footer py-3 bg-base-300 text-base-content max-lg:justify-around bg-[#404075] max-lg:flex-wrap   max-lg:gap-15 flex justify-around text-white ${
            isFooterVisible
              ? "opacity-100 transition-opacity duration-1000"
              : "opacity-0"
          }`}
        >
          <nav className="flex flex-col  max-lg:text-[0.8em]  max-lg:mx-20 ">
            <h6 className="footer-title text-2xl font-semibold mb-5">
              Location
            </h6>
            <p className=" font-semibold max-lg:text-[1em]">
              A508, Sagar Tech Plaza, Andheri Kurla
              <br />
              Road, Sakinaka, Junction, Andheri East,
              <br /> Mumbai, Maharashtra 400072.
            </p>
            <Link to="/">
              <div className="max-lg:flex justify-center">
                <img
                  className="w-24 h-auto my-7 cursor-pointer "
                  src="https://www.benow.in/assets/img/logo.png"
                  alt="Benow logo"
                />
              </div>
            </Link>
          </nav>
          <nav className="flex flex-col mx-5 ">
            <h6 className="footer-title text-2xl font-semibold mb-3">
              Useful Links
            </h6>
            <ul>
              <li className="my-3 cursor-pointer hover:text-orange-500">
                <Link to="/">Home</Link>
              </li>
              <li className="my-3 cursor-pointer hover:text-orange-500">
                <Link to="/about">The Benow Story</Link>
              </li>
              <li className="my-3 cursor-pointer hover:text-orange-500">
                <Link to="/culture">Culture</Link>
              </li>
              <li className="my-3 cursor-pointer hover:text-orange-500">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="my-3 cursor-pointer hover:text-orange-500">
                <Link to="/announcements">Announcements</Link>
              </li>
            </ul>
          </nav>
          <nav className="flex flex-col ">
            <h6 className="footer-title text-2xl font-semibold mb-3">
              Get In Touch
            </h6>
            <ul>
              <li className="my-5 font-semibold">
                <span>Call Customer Care</span> <br />
                <a href="tel:022-62634100">022-62634100</a>
              </li>
              <li className="my-5 font-semibold">
                <span>Need Support?</span> <br />
                <a href="mailto:career@benow.in">hello@benow.in</a>
              </li>
            </ul>
          </nav>
          <nav>
            <h6 className="footer-title text-2xl font-semibold mb-3">
              Follow Us
            </h6>
            <div className="grid grid-flow-col gap-4 ">
              <a
                target="_blank"
                href="https://in.linkedin.com/company/benowteam"
                className="p-2 bg-white transition duration-500 ease-in-out rounded-3xl text-[#404075] hover:bg-red-500 hover:text-white"
              >
                <FaLinkedin className="cursor-pointer text-2xl " />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/benow.india/"
                className="p-2 bg-white rounded-3xl transition duration-500 ease-in-out text-[#404075] hover:bg-red-500 hover:text-white"
              >
                <FaInstagram className="cursor-pointer text-2xl " />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/@benowindia"
                className="p-2 bg-white rounded-3xl transition duration-500 ease-in-out text-[#404075] hover:bg-red-500 hover:text-white"
              >
                <AiOutlineYoutube className="cursor-pointer text-2xl " />
              </a>
            </div>
          </nav>
        </div>
        <div className="flex justify-center items-center">
          <hr className="w-[72vw] my-2 ml-3 border-t border-gray-300 " />
        </div>
        <section className="end w-full flex justify-around max-lg:flex-col max-lg:text-[0.8em] items-center pb-3 ">
          <div className="copyright w-1/2 flex  justify-center">
            <p className="max-lg:mb-5 text-center">
              Copyright © Benow 2024. All Rights Reserved.
            </p>
          </div>
          <div className="additional-info w-1/2 flex justify-center ">
            <p className="max-sm:flex-col flex">
              <a
                className="px-2 text-red-500"
                href="https://www.benow.in/privacypolicy.php"
              >
                Privacy Policy
              </a>
              <span className="max-sm:hidden">|</span>
              <a
                className="px-2 text-red-500"
                href="https://www.benow.in/termsconditions.php"
              >
                Terms & Conditions
              </a>
              <span className="max-sm:hidden">|</span>
              <a
                className="px-2 text-red-500"
                href="https://www.benow.in/grievance.php"
              >
                Grievance
              </a>
              <span className="max-sm:hidden">|</span>
            </p>
          </div>
        </section>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
