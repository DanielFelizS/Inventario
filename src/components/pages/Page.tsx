import Table from '../organisms/Table';
import BtnAction from "../atoms/Buttons/Button"
import { useNavigate, useParams } from "react-router-dom";
import { saveAs } from 'file-saver';
import api from '../../axiosData.mts';
import InputBusqueda from '../atoms/Inputs/InputBusqueda';
import { useState } from 'react';
import Navigation from '../molecules/Navbar';
import DeleteComputer from '../molecules/DeletePc';
import ComputerEdit from "../templates/Computer/FormEditar";
import ComputerAdd from "../templates/Computer/FormAgregar";

// HomePage
import HomeDispositivos from './Home/HomeDispositivos';
import HomeDepartamento from './Home/HomeDepartamento';
import HomeComputer from './Home/HomePc';
import HomeUsuario from './Home/HomeUsuario';
import HomeAuditoria from './Home/HomeAuditoria';
import HomePage from './Home/HomePage';

// CRUD
import AgregarDispositivo from './CRUD/Dispositivos/AgregarDispositivo';
import EditarDispositivo from './CRUD/Dispositivos/EditarDispositivo';
import EliminarDispositvo from './CRUD/Dispositivos/EliminarDispositvo';
import AgregarDepartamento from './CRUD/Departamento/AgregarDepartamento';
import EditarDepartamento from './CRUD/Departamento/EditarDepartamento';
import EliminarDepartamento from './CRUD/Departamento/EliminarDepartamento';
import AgregarComputer from './CRUD/Computers/AgregarPc';
import EditarComputer from './CRUD/Computers/EditarPc';
import EliminarComputer from './CRUD/Computers/EliminarPc';
import EliminarUsuario from './CRUD/Usuarios/EliminarUsuario';
import EditarUsuario from './CRUD/Usuarios/EditarUsuario';

// Export
export {
    HomeDispositivos,
    HomeDepartamento,
    HomeComputer,
    HomeUsuario,
    HomeAuditoria,
    HomePage,
    AgregarDispositivo,
    EditarDispositivo,
    EliminarDispositvo,
    AgregarDepartamento,
    EditarDepartamento,
    EliminarDepartamento,
    AgregarComputer,
    EditarComputer,
    EliminarComputer,
    EliminarUsuario,
    EditarUsuario, Table, BtnAction, useNavigate,
    saveAs, api, InputBusqueda,
    useState, Navigation, useParams,
    DeleteComputer, ComputerEdit, ComputerAdd
}