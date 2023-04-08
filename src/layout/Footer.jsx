import React from "react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { footer } from "../data";
import { BiUpArrowAlt } from "react-icons/bi";

const Footer = () => {
  // destruct
  const { details, social } = footer;

  return (
    <section className="text-white bg-[#393646]">
      <div className="py-10 page-container">
        {/* footer-top */}
        <div className="flex flex-col items-center justify-between gap-8 pb-5 border-b md:flex-row border-blueColor">
          <NavLink
            className="flex items-center gap-3 uppercase select-none"
            to="/"
          >
            <img src={logo} alt="logo" className="w-8" />
            <span className="text-2xl font-semibold text-blue-500 uppercase gradient-1">
              desco shop
            </span>
          </NavLink>
          <div className="flex items-center gap-5">
            {social.map((item, index) => (
              <span
                key={index}
                className="text-3xl cursor-pointer hover:text-blue-500"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* footer-links */}
        <div className="flex flex-wrap gap-16 mt-10 text-start md:gap-5">
          {details.map(({ title, links, id }) => {
            return (
              <div className="flex flex-col flex-1" key={id}>
                <h2 className="mb-3 text-lg font-bold text-blue-500 uppercase">
                  {title}
                </h2>
                <ul className="flex flex-col gap-2">
                  {links.map((item, index) => {
                    return (
                      <li key={index}>
                        <a className="text-sm font-medium links" href="#">
                          {item}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* footer-Copyright */}
        <p className="mt-20 text-base font-semibold text-center gradient-3">
          @Copyright 2023. All Right Reserved.
        </p>
      </div>

      {/* scroll to top */}
      <a href="#">
        <div className="fixed w-[50px] h-[50px] rounded-full bottom-5 right-5 flex items-center justify-center bg-blue-500 text-white z-40 cursor-pointer font-bold text-2xl">
          <BiUpArrowAlt></BiUpArrowAlt>
        </div>
      </a>
    </section>
  );
};

export default Footer;
