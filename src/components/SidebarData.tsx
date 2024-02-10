import { IoHome } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoEyeSharp } from "react-icons/io5";
import { TbDeviceDesktopPlus } from "react-icons/tb";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Inicio",
    path: "/Inicio",
    icon: <IoHome />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,

    // subNav: [
    //   {
    //     title: 'Users',
    //     path: '/overview/users',
    //     icon: <IoIcons.IoIosPaper />
    //   },
    //   {
    //     title: 'Revenue',
    //     path: '/overview/revenue',
    //     icon: <IoIcons.IoIosPaper />
    //   }
    // ]
  },
  {
    title: "Tecnologia",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        path: "/Agregar",
        title: "Agregar",
        icon: <TbDeviceDesktopPlus />,
        cName: "sub-nav",
      },
      {
        path: "/Editar",
        title: "Editar",
        icon: <FaEdit />,
        cName: "sub-nav",
      },
      {
        path: "/Consultar",
        title: "Consultar",
        icon: <IoEyeSharp />,
        cName: "sub-nav",
      },
      {
        path: "/Eliminar",
        title: "Eliminar",
        icon: <RiDeleteBin6Line />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "RR HH",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        path: "/Agregar",
        title: "Agregar",
        icon: <TbDeviceDesktopPlus />,
        cName: "sub-nav",
      },
      {
        path: "/Editar",
        title: "Editar",
        icon: <FaEdit />,
        cName: "sub-nav",
      },
      {
        path: "/Consultar",
        title: "Consultar",
        icon: <IoEyeSharp />,
        cName: "sub-nav",
      },
      {
        path: "/Eliminar",
        title: "Eliminar",
        icon: <RiDeleteBin6Line />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Dirección Financiera",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        path: "/Agregar",
        title: "Agregar",
        icon: <TbDeviceDesktopPlus />,
        cName: "sub-nav",
      },
      {
        path: "/Editar",
        title: "Editar",
        icon: <FaEdit />,
        cName: "sub-nav",
      },
      {
        path: "/Consultar",
        title: "Consultar",
        icon: <IoEyeSharp />,
        cName: "sub-nav",
      },
      {
        path: "/Eliminar",
        title: "Eliminar",
        icon: <RiDeleteBin6Line />,
        cName: "sub-nav",
      },
    ],
  },
];
