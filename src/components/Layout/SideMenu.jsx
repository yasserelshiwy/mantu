import React from "react";
import img from "../../assets/image/bg-icon.png";
import { Link } from "react-router-dom";
export default function SideMenu({ isSideMenuOpen, setIsSideMenuOpen }) {
  return (
    <div
      className={`h-[100vh] ${
        isSideMenuOpen
          ? "fixed left-0 z-40 top-0 bottom-0 xl:sticky w-[300px] transition-all duration-200 xl:w-[400px] xl:pl-0 xl:p-5 xl:py-8  xl:overflow-hidden"
          : "fixed left-[-300px] top-0 bottom-0 w-[300px]   xl:w-[0px] xl:pl-0 xl:p-0 xl:py-8 overflow-hidden"
      }`}
    >
      <div
        className="bg-[#181e28] 
       h-full w-full xl:rounded-r-4xl overflow-auto sidebar-scroll  p-8"
      >
        <div className="absolute top-0 right-2 p-3  xl:hidden">
          <button
            onClick={() => {
              setIsSideMenuOpen(false);
            }}
          >
            <img
              src="https://img.icons8.com/?size=100&id=63675&format=png&color=000000"
              alt="power-off"
              className="w-6 h-6 hover:scale-110 transition-transform duration-200 cursor-pointer"
            />
          </button>
        </div>
        <img
          src={img}
          alt="icon-m"
          className={` ${
            isSideMenuOpen
              ? "fixed bottom-18 left-0 right-0 opacity-5 transition-all duration-100  "
              : " -left-50"
          }   `}
        />
        <div className="Fashion ">
          <h2 className="text-[15px] font-bold uppercase tracking-wider text-gray-600 relative before:w-[70%] before:h-[0.1px] before:bg-gray-700 before:absolute before:right-0 before:bottom-2">
            Fashion
          </h2>
          <ul className="my-7 space-y-5">
            <li>
              <Link to={""} className="flex items-center gap-3 ">
                {" "}
                <img
                  src="https://img.icons8.com/?size=100&id=11870&format=png&color=000000"
                  alt=""
                  className="w-10"
                />
                <span className="text-lg text-[#b9c2d0] capitalize hover:text-yellow-400 transition-colors tracking-wider ">
                  {" "}
                  Clothes{" "}
                </span>
              </Link>
            </li>
            <li>
              <Link to={""} className="flex items-center gap-3 ">
                {" "}
                <img
                  src="https://img.icons8.com/?size=100&id=16584&format=png&color=000000"
                  alt=""
                  className="w-10"
                />
                <span className="text-lg text-[#b9c2d0] capitalize hover:text-yellow-400 transition-colors tracking-wider ">
                  {" "}
                  Shoes
                </span>
              </Link>
            </li>
            <li>
              <Link to={""} className="flex items-center gap-3 ">
                {" "}
                <img
                  src="https://img.icons8.com/?size=100&id=18147&format=png&color=000000"
                  alt=""
                  className="w-10"
                />
                <span className="text-lg text-[#b9c2d0] capitalize hover:text-yellow-400 transition-colors tracking-wider ">
                  glasses
                </span>
              </Link>
            </li>
            <li>
              <Link to={""} className="flex items-center gap-3 ">
                {" "}
                <img
                  src="https://img.icons8.com/?size=100&id=sIguP1G6Ms0m&format=png&color=000000"
                  alt=""
                  className="w-10"
                />
                <span className="text-lg text-[#b9c2d0] capitalize hover:text-yellow-400 transition-colors tracking-wider ">
                  {" "}
                  bags
                </span>
              </Link>
            </li>
            <li>
              <Link to={""} className="flex items-center gap-3 ">
                {" "}
                <img
                  src="https://img.icons8.com/?size=100&id=37743&format=png&color=000000"
                  alt=""
                  className="w-10"
                />
                <span className="text-lg text-[#b9c2d0] capitalize hover:text-yellow-400 transition-colors tracking-wider ">
                  {" "}
                  hat
                </span>
              </Link>
            </li>
            <li>
              <Link to={""} className="flex items-center gap-3 ">
                {" "}
                <img
                  src="https://img.icons8.com/?size=100&id=20857&format=png&color=000000"
                  alt=""
                  className="w-10"
                />
                <span className="text-lg text-[#b9c2d0] capitalize hover:text-yellow-400 transition-colors tracking-wider ">
                  {" "}
                  makeup
                </span>
              </Link>
            </li>
            <li>
              <Link to={""} className="flex items-center gap-3 ">
                {" "}
                <img
                  src="https://img.icons8.com/?size=100&id=18174&format=png&color=000000"
                  alt=""
                  className="w-10"
                />
                <span className="text-lg text-[#b9c2d0] capitalize hover:text-yellow-400 transition-colors tracking-wider ">
                  {" "}
                  cosmetics
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="Bakery ">
          <h2 className="text-[15px] font-bold uppercase tracking-wider text-gray-600 relative before:w-[70%] before:h-[0.1px] before:bg-gray-700 before:absolute before:right-0 before:bottom-2">
            Bakery
          </h2>
          <ul className="my-7 space-y-5">
            <li>
              <Link to={""} className="flex items-center gap-3 ">
                {" "}
                <img
                  src="https://img.icons8.com/?size=100&id=c8hNMZ2onpVy&format=png&color=000000"
                  alt=""
                  className="w-10"
                />
                <span className="text-lg text-[#b9c2d0] capitalize hover:text-yellow-400 transition-colors tracking-wider ">
                  {" "}
                  cake
                </span>
              </Link>
            </li>
            <li>
              <Link to={""} className="flex items-center gap-3 ">
                {" "}
                <img
                  src="https://img.icons8.com/?size=100&id=12855&format=png&color=000000"
                  alt=""
                  className="w-10"
                />
                <span className="text-lg text-[#b9c2d0] capitalize hover:text-yellow-400 transition-colors tracking-wider ">
                  {" "}
                  bread
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="Vegetables ">
          <h2 className="text-[15px] font-bold uppercase tracking-wider text-gray-600 relative before:w-[70%] before:h-[0.1px] before:bg-gray-700 before:absolute before:right-0 before:bottom-2">
            Vegetables
          </h2>
          <ul className="my-7 space-y-5">
            <li>
              <Link to={""} className="flex items-center gap-3 ">
                {" "}
                <img
                  src="https://img.icons8.com/?size=100&id=12865&format=png&color=000000"
                  alt=""
                  className="w-10"
                />
                <span className="text-lg text-[#b9c2d0] capitalize hover:text-yellow-400 transition-colors tracking-wider ">
                  {" "}
                  tuber root
                </span>
              </Link>
            </li>
            <li>
              <Link to={""} className="flex items-center gap-3 ">
                {" "}
                <img
                  src="https://img.icons8.com/?size=100&id=18102&format=png&color=000000"
                  alt=""
                  className="w-10"
                />
                <span className="text-lg text-[#b9c2d0] capitalize hover:text-yellow-400 transition-colors tracking-wider ">
                  {" "}
                  tomato
                </span>
              </Link>
            </li>
            <li>
              <Link to={""} className="flex items-center gap-3 ">
                {" "}
                <img
                  src="https://img.icons8.com/?size=100&id=18044&format=png&color=000000"
                  alt=""
                  className="w-10"
                />
                <span className="text-lg text-[#b9c2d0] capitalize hover:text-yellow-400 transition-colors tracking-wider ">
                  {" "}
                  lemon
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="Fruits ">
          <h2 className="text-[15px] font-bold uppercase tracking-wider text-gray-600 relative before:w-[70%] before:h-[0.1px] before:bg-gray-700 before:absolute before:right-0 before:bottom-2">
            Fruits
          </h2>
          <ul className="my-7 space-y-5">
            <li>
              <Link to={""} className="flex items-center gap-3 ">
                {" "}
                <img
                  src="https://img.icons8.com/?size=100&id=18039&format=png&color=000000"
                  alt=""
                  className="w-10"
                />
                <span className="text-lg text-[#b9c2d0] capitalize hover:text-yellow-400 transition-colors tracking-wider ">
                  {" "}
                  avocado
                </span>
              </Link>
            </li>
            <li>
              <Link to={""} className="flex items-center gap-3 ">
                {" "}
                <img
                  src="https://img.icons8.com/?size=100&id=18041&format=png&color=000000"
                  alt="strawberry"
                  className="w-10"
                />
                <span className="text-lg text-[#b9c2d0] capitalize hover:text-yellow-400 transition-colors tracking-wider ">
                  {" "}
                  strawberry
                </span>
              </Link>
            </li>
            <li>
              <Link to={""} className="flex items-center gap-3 ">
                {" "}
                <img
                  src="https://img.icons8.com/?size=100&id=19527&format=png&color=000000"
                  alt="cherry"
                  className="w-10"
                />
                <span className="text-lg text-[#b9c2d0] capitalize hover:text-yellow-400 transition-colors tracking-wider ">
                  {" "}
                  cherry
                </span>
              </Link>
            </li>
            <li>
              <Link to={""} className="flex items-center gap-3 ">
                {" "}
                <img
                  src="https://img.icons8.com/?size=100&id=3xTXKv357TYu&format=png&color=000000"
                  alt=" Lychee"
                  className="w-10"
                />
                <span className="text-lg text-[#b9c2d0] capitalize hover:text-yellow-400 transition-colors tracking-wider ">
                  {" "}
                  Lychee
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
