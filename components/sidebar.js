import React from "react";
import Link from "next/link";
import Img from "next/image";
import Logo from "../images/logo-altacamp.svg";
import { RiDashboardLine } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineClass } from "react-icons/md";
import { CgLogOut } from "react-icons/cg";

const SideBar = () => {
  return (
    <>
      <div>
        <aside className="w-64" aria-label="Sidebar">
          <div className="overflow-y-auto py-4 px-4 h-screen bg-[#1B1B1B]">
            <div className="flex items-center pl-2 mt-3 mb-5">
              <div>
                <Link href="/">
                  <Img src={Logo} alt="" />
                </Link>
              </div>
            </div>
            <ul className="space-y-2 py-4">
              <li>
                <div className="flex items-center py-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></svg>
                  <RiDashboardLine className="text-xl" />
                  <span className="ml-3">
                    <Link href="/"> Dashboard</Link>
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center py-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></svg>
                  <BsPeople className="text-xl" />
                  <span className="flex-1 ml-3">
                    <Link href="/mentees">Mentee</Link>
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center py-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></svg>
                  <AiOutlineUser className="text-xl" />
                  <span className="flex-1 ml-3">
                    <Link href="/users">Users</Link>
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center py-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></svg>
                  <MdOutlineClass className="text-xl" />
                  <span className="flex-1 ml-3">
                    <Link href="/classes">Class</Link>
                  </span>
                </div>
              </li>
              <li>
                <div className="mt-12 flex items-center py-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></svg>
                  <CgLogOut className="text-xl" />
                  <span className="flex-1 ml-3">Logout</span>
                </div>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};

export default SideBar;
