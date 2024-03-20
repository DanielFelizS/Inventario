import Table from '../organisms/Table';
import BtnAction from "../atoms/Buttons/Button"
import { useState } from 'react';
import AgregarSoporte from '../AgregarSoporte';
import AgregarAdmin from '../AgregarAdmin';

export const HomeUsuario = () => {
    const [admin, setAdmin] = useState(false);
    const handleAdmin = () => setAdmin(true);
    const handleCloseAdmin = () => setAdmin(false);
    const [soporte, setSoporte] = useState(false);
    const handleSoporte = () => setSoporte(true);
    const handleCloseSoporte = () => setSoporte(false);

  const Datos = ['id', 'firstName', 'lastName', 'userName', 'email'];

  return (
    <>
      <BtnAction btncolor='primary' action={handleAdmin} btnlabel='Cambiar a Admin'/>
      <BtnAction btncolor='primary' action={handleSoporte} btnlabel='Cambiar a Soporte'/>

      <AgregarSoporte MostrarModal={soporte} CerrarModal={handleCloseSoporte}/>
      <AgregarAdmin MostrarModal={admin} CerrarModal={handleCloseAdmin}/>
      
      <br />
      <Table APIPath='usuarios' APINames={Datos} VerDatos={'VerUsuario'} EditarDatos={'EditarUsuario'} EliminarDatos={'EliminarUsuario'} search=''/>
      <br />

    </>
  )
}

export default HomeUsuario;