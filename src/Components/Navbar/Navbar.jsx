import { IoLocationOutline } from "react-icons/io5";

import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { AiOutlineShop } from "react-icons/ai";
import { BsCollection } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { IoIosSunny, IoMdHeartEmpty, IoMdMoon } from "react-icons/io";
import { IoBagOutline, IoSearchSharp } from "react-icons/io5";
import { PiHeadset } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { mainData } from "../../data/mainData";
import { zustandStore } from "../../hooks/zustandStore";
const Navbar = () => {
  const { favorite, cart } = zustandStore();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") ?? false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div>
      <div className=" justify-between px-[150px] bg-gray-200 py-1 hidden lg:flex dark:bg-dark dark:text-white">
        <div className="flex gap-4">
          <div className="flex items-center gap-0.5 underline">
            <IoLocationOutline className="" />
            <p>O'zbekiston</p>
          </div>
          <div className="flex items-center gap-0.5 underline">
            <AiOutlineShop className="" />
            <p>Bizning do'konlar</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-0.5">
            <FiPhone />
            <p className="text-gray-600">+998 71 203 66 60</p>
          </div>
          <div className="flex items-center gap-0.5">
			<PiHeadset />
			<p className="text-gray-600">Telegram Operator</p>
		  </div>
          <div className="flex items-center gap-2">
            <img
              src="https://blazon.ru/wp-content/uploads/2021/11/636.jpg"
              alt=""
              className="rounded-full w-[20px] h-[20px]"
            />
            <p className="text-gray-700 font-medium">O'zbekcha</p>
          </div>
        </div>
      </div>
      <div className="hidden items-center justify-between px-[50px] pt-4 pb-4 xl:px-[80px] 2xl:px-[150px] lg:flex">
        <div className="flex items-center gap-4">
          <NavLink to={"/"}>
            <img
              src="https://openshop.uz/_next/static/media/openshop-logo.a31faee8.png"
              alt=""
              className="min-w-[200px] w-[200px]"
            />
          </NavLink>
          <br />
        </div>
        <div className="flex gap-">
          <div className="flex gap-1.5">
            <div className="flex">
              <button className="p-2 px-4 rounded-[4px] text-white bg-[#FF7300] flex items-center gap-5">
                <BsCollection />
              </button>
            </div>
            <input
              type="text"
              className=" border border-gray-300 rounded-l-md p-1.5 w-[200px] text-gray-500 text-[15px] xl:w-[400px] "
              value="Mahsulotlar va turkumlar izlash"
            />
          </div>
          <div className="w-[70px]  bg-gray-200 rounded-r-md flex items-center justify-center border-gray-300 border">
            <IoSearchSharp size={20} />
          </div>
        </div>
        <div className="flex ga">
          <div className="flex items-center gap-2 hover:bg-gray-300 px-3 py-2 rounded-sm dark:hover:bg-[#1e2e53]">
            <FaRegUser size={20} />
            <p className=" text-base">Kirish</p>
          </div>
          <NavLink
            className="flex items-center gap-2 hover:bg-gray-300 px-3 py-2 rounded-sm relative dark:hover:bg-[#1e2e53]"
            to={"/favorite"}
          >
            <IoMdHeartEmpty size={20} />
            <p className=" text-base ">
              Saralangan{" "}
              <span className="text-[#FF7300] absolute top-0 right-1">
                {favorite.length == 0 ? "" : favorite.length}
              </span>
            </p>
          </NavLink>
          <NavLink
            className="flex items-center gap-2 hover:bg-gray-300 px-3 py-2 rounded-sm relative dark:hover:bg-[#1e2e53]"
            to={"/cart"}
          >
            <IoBagOutline size={20} />
            <p className=" text-base">
              Savat{" "}
              <span className="text-uzum absolute top-0 right-1">
                {cart.length == 0 ? "" : cart.length}
              </span>
            </p>
          </NavLink>
          <button
            className=" hover:bg-gray-300 px-3 py-2 rounded-sm relative dark:hover:bg-[#1e2e53]"
            onClick={() => {
              setDarkMode(!darkMode);
            }}
          >
            {darkMode ? (
              <div className="flex items-center gap-2">
                <IoIosSunny />
                <p className=" text-base">Light</p>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <IoMdMoon />
                <p className=" text-base">Dark</p>
              </div>
            )}
          </button>
        </div>
      </div>
      <div className="hidden justify-between items-center px-[50px] xl:px-[150px] lg:flex">
        {mainData.map((category) => (
          <div>
            <NavLink to={`/category/${category.slug}`} className=" text-[16px]">
              {category.categoryName}
            </NavLink>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center px-[50px] py-5 lg:hidden">
        <div className="flex items-center gap-4">
          <NavLink to={"/"}>
            <img
              src="https://openshop.uz/_next/static/media/openshop-logo.a31faee8.png"
              alt=""
              className="min-w-[100px] w-[100px]"
            />
          </NavLink>
        </div>
        <div className="flex items-center gap-2 hover:bg-gray-300 px-3 py-2 rounded-sm">
          <FaRegUser size={20} />
          <p className=" text-base">Kirish</p>
        </div>
        <Menu>
          <MenuHandler>
            <Button color="white">Menu</Button>
          </MenuHandler>
          <MenuList>
            {mainData.map((category) => (
              <MenuItem>
                <NavLink
                  to={`/category/${category.slug}`}
                  className="text-[#4d4f59] text-[16px]"
                >
                  {category.categoryName}
                </NavLink>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </div>
      <div className="px-[50px] lg:hidden">
        <input
          type="text"
          className=" border border-gray-300 rounded-l-md p-1.5 w-full text-gray-500 text-[15px] xl:w-[400px] "
          value="Mahsulotlar va turkumlar izlash"
        />
      </div>
    </div>
  );
};

export default Navbar;
