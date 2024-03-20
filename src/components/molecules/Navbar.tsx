/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";
// import { IoHome } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { TbDevicesPc } from "react-icons/tb";
import { MdApartment, MdComputer } from "react-icons/md"

export const Sidebar = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    // {
    //   path: "/Inicio",
    //   name: "Inicio",
    //   icon: <IoHome />,
    // },
    {
      path: "/Dispositivo",
      name: "Dispositivo",
      icon: <TbDevicesPc />,
    },
    {
      path: "/Departamentos",
      name: "Departamento",
      icon: <MdApartment />,
    },
    {
      path: "/Computer",
      name: "Computer",
      icon: <MdComputer />,
    },
    {
      path: "/Usuarios",
      name: "Usuario",
      icon: <FaUserCircle />,
    }
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link">
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
