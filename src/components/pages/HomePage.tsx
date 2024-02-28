import Table from '../organisms/Table';
import BtnAction from "../atoms/Buttons/Button"
// import DataPagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/AgregarDispositivo");
  };
  const Datos = ['id', 'nombre_equipo', 'marca', 'modelo', 'estado', 'serial_no', 'cod_inventario', 'bienes_nacionales', 'fecha_modificacion', 'propietario_equipo', 'departamentoId'];

  return (
    <>
      <BtnAction btncolor='success' action={handleNavigate} btnlabel='AgregarDatos'/> 
      {/* <br /> */}
      <Table APIPath='dispositivos' APINames={Datos} VerDatos={'VerDispositvo'} EditarDatos={'EditarDispositivo'} EliminarDatos={'EliminarDispositivos'}/>
      {/* <DataPagination/> */}
    </>
  )
}

export default HomePage;