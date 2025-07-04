import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import { useState } from "react";

export default function Navbar({ setIsSideMenuOpen, isSideMenuOpen }) {
  const linkClasses =
    "text-lg font-bold hover:text-blue-700 transition-colors duration-300";
  const linkActiveClasses = "text-blue-700 font-bold text-lg";
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="bg-white rounded-b-2xl shadow p-6 md:flex md:justify-between md:items-center ">
      <div className="logo flex justify-between  items-center w-full md:justify-start md:gap-6 ">
        <button
          onClick={() => {
            if (isSideMenuOpen === true) {
              setIsSideMenuOpen(false);
            } else {
              setIsSideMenuOpen(true);
            }
          }}
          className={`w-15.5 h-7 flex items-center rounded-full p-1 duration-300 ${
            isSideMenuOpen ? "bg-blue-400" : "bg-gray-300"
          }`}
        >
          <div
            className={`bg-slate-800 w-5 h-5 rounded-full shadow-md transform duration-300 ${
              isSideMenuOpen ? "translate-x-8" : ""
            }`}
          ></div>
        </button>

        <Link to={"/"}>
          <img src={logo} alt="mantu logo" className="w-[120px]" />
        </Link>
        <button
          onClick={() => {
            setIsNavOpen(true);
          }}
          className=" lg:hidden text-lg mt-2 cursor-pointer "
        >
          <i className="fa-solid fa-bars-staggered"></i>
        </button>
      </div>
      <div className="list flex items-center gap-20">
        <div className="first-list ">
          <ul className=" gap-9 items-center hidden lg:flex ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? linkActiveClasses : linkClasses
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  isActive ? linkActiveClasses : linkClasses
                }
              >
                product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Categories"
                className={({ isActive }) =>
                  isActive ? linkActiveClasses : linkClasses
                }
              >
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/order"
                className={({ isActive }) =>
                  isActive ? linkActiveClasses : linkClasses
                }
              >
                Order
              </NavLink>
            </li>
          </ul>
        </div>
        <aside
          className={`second-list fixed ${
            isNavOpen === true ? "left-0" : "-left-full"
          } transition-all duration-700 top-0 bottom-0  bg-[#181e28]  px-4 w-[300px] md:w-[350px] py-7 z-50 `}
        >
          <div className="flex justify-between items-center text-lg font-bold pr-5 pl-2 mb-8">
            <h2 className="text-white">My Menu</h2>
            <button
              onClick={() => {
                setIsNavOpen(false);
              }}
              className="cursor-pointer"
            >
              <i className="fa-solid fa-xmark text-red-800 text-2xl mt-2"></i>
            </button>
          </div>
          <ul className=" flex flex-col gap-8 text-gray-400">
            <li className="border-1 p-2 px-3 rounded-2xl border-gray-700">
              <NavLink
                onClick={() => setIsNavOpen(false)}
                to="/"
                className={({ isActive }) =>
                  isActive ? linkActiveClasses : linkClasses
                }
              >
                Home
              </NavLink>
            </li>
            <li className="border-1 p-2 px-3 rounded-2xl border-gray-700">
              <NavLink
                onClick={() => setIsNavOpen(false)}
                to="/product"
                className={({ isActive }) =>
                  isActive ? linkActiveClasses : linkClasses
                }
              >
                product
              </NavLink>
            </li>
            <li className="border-1 p-2 px-3 rounded-2xl border-gray-700">
              <NavLink
                onClick={() => setIsNavOpen(false)}
                to="/Categories"
                className={({ isActive }) =>
                  isActive ? linkActiveClasses : linkClasses
                }
              >
                Categories
              </NavLink>
            </li>
            <li className="border-1 p-2 px-3 rounded-2xl border-gray-700">
              <NavLink
                onClick={() => setIsNavOpen(false)}
                to="/order"
                className={({ isActive }) =>
                  isActive ? linkActiveClasses : linkClasses
                }
              >
                Order
              </NavLink>
            </li>
          </ul>
          <div className="mt-10 flex justify-center gap-4">
            {[
              { icon: "facebook-f", href: "/" },
              { icon: "twitter", href: "/" },
              { icon: "instagram", href: "/" },
              { icon: "linkedin-in", href: "/" },
            ].map((icon) => (
              <a
                key={icon}
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center"
              >
                <i className={`fa-brands fa-${icon.icon}`} />
              </a>
            ))}
          </div>
        </aside>
        <div className="Desktop-Links z-50 relative">
          <ul className="flex items-center gap-6 text-xl px-7  fixed bottom-0 left-0 right-0 justify-between py-1.5 bg-[#10141a] text-white md:relative md:bg-white md:text-black  ">
            <li>
              <button className="cursor-pointer hover:text-blue-700 duration-300 transition-colors ">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </li>
            <li className="relative group ">
              <button className="cursor-pointer hover:text-blue-700 duration-300 transition-colors ">
                <i className="fa-regular fa-user"></i>
              </button>
              <div
                className="     absolute top-full left-1/2 -translate-x-1/2 mt-3
      w-40 rounded-xl  bg-white shadow
      opacity-0 invisible translate-y-2
      group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
      transition-all duration-300 "
              >
                <div className=" shadow flex flex-col gap-3 text-[14px]  font-medium rounded-xl bg-white py-4 px-4 text-gray-600 ">
                  <Link
                    to={"/login"}
                    className="hover:text-blue-700 duration-300 transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to={"/signup"}
                    className="hover:text-blue-700 duration-300 transition-colors"
                  >
                    Register
                  </Link>

                  <Link
                    to={"/login"}
                    className="hover:text-blue-700 duration-300 transition-colors"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </li>
            <li className="md:hidden">
              <NavLink
                className="text-lg font-bold hover:text-blue-700 duration-300 transition-colors  "
                to="/"
              >
                <i className="fa-solid fa-house"></i>
              </NavLink>
            </li>
            <li>
              <button className="cursor-pointer hover:text-blue-700 duration-300 transition-colors  ">
                <i className="fa-regular fa-heart"></i>
              </button>
            </li>
            <li>
              <button className="cursor-pointer hover:text-blue-700 duration-300 transition-colors ">
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
