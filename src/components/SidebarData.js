import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as AiFillProfile from "react-icons/ai";


export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Diabetes",
    path: "/diabetes",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Cancer",
    path: "/cancer",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Contact Us",
    path: "/contact",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <AiFillProfile.AiFillAccountBook/>,
    cName: "nav-text",
  },
  {
    title: "Feedback",
    path: "/feedback",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
];
