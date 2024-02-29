import { IoHome } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoEyeSharp } from "react-icons/io5";
import { TbDeviceDesktopPlus, TbDevicesPc } from "react-icons/tb";
import { MdApartment, MdComputer  } from "react-icons/md";
import { BsBuildingFillAdd } from "react-icons/bs";
import { FaBuildingCircleXmark } from "react-icons/fa6";
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
    title: "Dispositivos",
    path: "/Dispositivo",
    icon: <TbDevicesPc />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        path: "/AgregarDispositivo",
        title: "Agregar",
        icon: <TbDeviceDesktopPlus />,
        cName: "sub-nav",
      },
      {
        path: "/EditarDispositivo",
        title: "Editar",
        icon: <FaEdit />,
        cName: "sub-nav",
      },
      {
        path: "/VerDispositivo",
        title: "Ver",
        icon: <IoEyeSharp />,
        cName: "sub-nav",
      },
      {
        path: "/EliminarDispositivo",
        title: "Eliminar",
        icon: <RiDeleteBin6Line />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Departamento",
    path: "/Departamentos",
    icon: <MdApartment/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        path: "/AgregarDepartamento",
        title: "Agregar",
        icon: <BsBuildingFillAdd />,
        cName: "sub-nav",
      },
      {
        path: "/EditarDepartamento",
        title: "Editar",
        icon: <FaEdit />,
        cName: "sub-nav",
      },
      {
        path: "/VerDepartamento",
        title: "Ver",
        icon: <IoEyeSharp />,
        cName: "sub-nav",
      },
      {
        path: "/EliminarDepartamento",
        title: "Eliminar",
        icon: <FaBuildingCircleXmark />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "CPU",
    path: "/Computer",
    icon: <MdComputer/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        path: "/AgregarPc",
        title: "Agregar",
        icon: <TbDeviceDesktopPlus />,
        cName: "sub-nav",
      },
      {
        path: "/EditarPc",
        title: "Editar",
        icon: <FaEdit />,
        cName: "sub-nav",
      },
      {
        path: "/VerPc",
        title: "Ver",
        icon: <IoEyeSharp />,
        cName: "sub-nav",
      },
      {
        path: "/EliminarPc",
        title: "Eliminar",
        icon: <RiDeleteBin6Line />,
        cName: "sub-nav",
      },
    ],
  }
];
