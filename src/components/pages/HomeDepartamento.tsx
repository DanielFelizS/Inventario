import Table from '../organisms/Table';
import BtnAction from "../atoms/Buttons/Button"
// import DataPagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";

export const HomeDepartamento = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/AgregarDepartamento");
  };
  const Datos = ['id', 'nombre', 'descripción', 'fecha_creacion', 'encargado'];
  return (
    <>
      <BtnAction btncolor='success' action={handleNavigate} btnlabel='AgregarDatos'/> 
      {/* <br /> */}
      <Table APIPath='departamento' APINames= {Datos} VerDatos={'VerDepartamento'} EditarDatos={'EditarDepartamento'} EliminarDatos={'EliminarDepartamento'}/>
      {/* <DataPagination/> */}
    </>
  )
}

export default HomeDepartamento;