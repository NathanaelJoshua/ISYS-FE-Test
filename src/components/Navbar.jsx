import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.css";

export const Navbar = () => {
  const linkObject = [
    { name: "Home", link: "/Home" },
    { name: "Courses", link: "/Courses", dropdown: true },
    { name: "Teacher", link: "/Teacher" },
    { name: "Contact", link: "/Contact" },
    { name: "Fetch Data", link: "/FetchData" },
  ];

  const AppName = "Edu.dot";
  return (
    <div className="px-10 lg:px-[135px] py-5 flex justify-between items-center w-full">
      <div className="flex gap-3 items-center">
        <div className="dropdown">
          <div className="flex xl:hidden cursor-pointer drop-btn  text-xl ">
            <RxHamburgerMenu />
          </div>
          <div class="dropdown-content">
            {linkObject.map((item, index) => (
              <a href={item.link} key={index}>
                <div>{item.name}</div>
              </a>
            ))}
          </div>
        </div>

        <div className="colorPrimary cursor-pointer font-bold  text-xl ">
          {AppName}
        </div>
      </div>

      <div className="gap-10 hidden xl:flex">
        {linkObject.map((item, index) => (
          <a href={item.link} key={index}>
            <div>{item.name}</div>
          </a>
        ))}
      </div>

      <div className="flex gap-5 items-center cursor-pointer">
        <div>Log in</div>

        <div className="bgPrimary rounded-full text-white py-2 px-4 cursor-pointer">
          Sign up
        </div>
      </div>
    </div>
  );
};
