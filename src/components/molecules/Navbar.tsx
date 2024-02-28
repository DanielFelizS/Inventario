/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaBars, FaUserCircle, FaEdit } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoEyeSharp } from "react-icons/io5";
import { TbDeviceDesktopPlus } from "react-icons/tb";

export const Sidebar = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/Login",
      name: "Usuario",
      icon: <FaUserCircle />,
    },
    {
      path: "/Inicio",
      name: "Inicio",
      icon: <IoHome />,
    },
    {
      path: "/Agregar",
      name: "Agregar",
      icon: <TbDeviceDesktopPlus />,
    },
    {
      path: "/Editar",
      name: "Editar",
      icon: <FaEdit />,
    },
    {
      path: "/Consultar",
      name: "Consultar",
      icon: <IoEyeSharp />,
    },
    {
      path: "/Eliminar",
      name: "Eliminar",
      icon: <RiDeleteBin6Line />,
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
