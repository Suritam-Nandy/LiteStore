import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { RiDashboardLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { useFirebase, useFirestoreConnect } from "react-redux-firebase";

const Sidebar = () => {
  const firebase = useFirebase();

  const uid = firebase.auth().currentUser.uid;

  const name = firebase.auth().currentUser.displayName;

  const sidebarList = [
    {
      name: "Home",
      icon: <RiDashboardLine />,
      notificationCount: 0,
      link: "",
    },
    { name: "Profile", notificationCount: 2, link: "" },
    { name: "Requested Spaces", notificationCount: 0, link: "" },
    { name: "Interested Customers", notificationCount: 0, link: "" },
    { name: "My Space", notificationCount: 0, link: "" },
    { name: "Calendar", notificationCount: 0, link: "" },
    { name: "Payments", notificationCount: 0, link: "payments" },
  ];
  const [open, setOpen] = useState(false);
  // console.log(open);
  return (
    <>
      {/* Sidebar starts */}
      {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
      <div
        className={`${
          open ? "sm:flex" : "hidden"
        }  w-64 absolute mt-16 sm:relative bg-gray-800 shadow md:h-full flex-col justify-between  sm:flex h-screen pb-72`}
      >
        <div className="px-8 ">
          <div className="h-16 w-full pt-5 mt-1.5 flex items-center flex-col">
            <h1 className="text-4xl text-white">{name}</h1>
            <span className="text-sm">{uid}</span>
          </div>
          <ul className="mt-12">
            {sidebarList.map((item, index) => {
              return (
                <Link to={`/${item.link}`}>
                  <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
                    <div className="flex items-center">
                      {item.icon}
                      <span className="text-sm  ml-2">{item.name}</span>
                    </div>
                    {item.notificationCount > 0 && (
                      <div className="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">
                        {item.notificationCount}
                      </div>
                    )}
                  </li>
                </Link>
              );
            })}
            <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <Link to="/login">
                  <span
                    onClick={() => firebase.logout()}
                    className="text-sm  ml-2"
                  >
                    Logout
                  </span>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className=" relative sm:relative bg-gray-800 shadow md:h-full flex-col justify-between flex sm:hidden">
        <div className="absolute -right-4 bg-gray-800 shadow px-1">
          <button onClick={() => setOpen(!open)}>
            <FiMenu className="text-white" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
