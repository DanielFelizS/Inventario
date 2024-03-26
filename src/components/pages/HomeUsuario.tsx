import Table from '../organisms/Table';
import BtnAction from "../atoms/Buttons/Button"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import AgregarSoporte from '../AgregarSoporte';
import AgregarAdmin from '../AgregarAdmin';
import InputBusqueda from '../atoms/Inputs/InputBusqueda';
import Navigation from '../molecules/Navbar';

export const HomeUsuario = () => {
    const [admin, setAdmin] = useState(false);
    const handleAdmin = () => setAdmin(true);
    const handleCloseAdmin = () => setAdmin(false);
    const [soporte, setSoporte] = useState(false);
    const handleSoporte = () => setSoporte(true);
    const handleCloseSoporte = () => setSoporte(false);

    const [search, setSearch] = useState('');

    const handleChangeSearch = (e: any)=>{
      setSearch(e.target.value);
    }

    const navigate = useNavigate();
    const RegistrarUsuario = ()=> {
      navigate("/Registro")
    }

  const Datos = ['id', 'firstName', 'lastName', 'userName', 'email'];
  const Headers = ['ID', 'Nombre', 'Apellido', 'Username', 'Email'];

  return (
    <>
      <Navigation/>

      <div className='btn-Usuarios'>
        <InputBusqueda SearchValue={search} EventSearch={handleChangeSearch} />
        <BtnAction btncolor='success' action={RegistrarUsuario} btnlabel='Registrar un usuario'/>
        <BtnAction btncolor='success' action={handleAdmin} btnlabel='Cambiar a Admin'/>
        <BtnAction btncolor='success' action={handleSoporte} btnlabel='Cambiar a Soporte'/>

        {/* <BtnAction btncolor='success' action={handleNavigate} btnlabel='Registrar usuario'/>  */}
      </div>
      <br />

      <AgregarSoporte MostrarModal={soporte} CerrarModal={handleCloseSoporte}/>
      <AgregarAdmin MostrarModal={admin} CerrarModal={handleCloseAdmin}/>

      <Table APIPath='usuarios' APINames={Datos} EditarDatos={'EditarUsuario'} EliminarDatos={'EliminarUsuario'} searchData={search} Header={Headers}/>
      <br />

    </>
  )
}

export default HomeUsuario;