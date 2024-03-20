import Table from '../organisms/Table';
import BtnAction from "../atoms/Buttons/Button"
import { useNavigate } from "react-router-dom";
import { saveAs } from 'file-saver';
import api from '../../axiosData.mts';
import InputBusqueda from '../atoms/Inputs/InputBusqueda';
import { useState } from 'react';


export const HomeDepartamento = () => {

  const [search, setSearch] = useState('');

  const handleChangeSearch = (e: any)=>{
    setSearch(e.target.value);
    console.log(search);
  }

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/AgregarDepartamento");
  };

  const Reporte = async () => {
    try {
      const response = await api.get(`/departamento/reporte`, { responseType: 'blob' });
      const blob = new Blob([response.data], { type: 'application/pdf' });
      saveAs(blob, 'Departamentos.pdf');
    } catch (error) {
      console.error(error);
    }
  };

  const Datos = ['id', 'nombre', 'descripción', 'fecha_creacion', 'encargado'];

  return (
    <>
      <div className='btn-Agregar'>

        <InputBusqueda SearchValue={search} EventSearch={handleChangeSearch} />

        <BtnAction btncolor='success' action={handleNavigate} btnlabel='AgregarDatos'/> 
      </div>
      <br />
      <Table APIPath='departamento' APINames= {Datos} VerDatos={'VerDepartamento'} EditarDatos={'EditarDepartamento'} EliminarDatos={'EliminarDepartamento'} searchData={search}/>
      <br />
      <BtnAction btncolor='success' action={Reporte} btnlabel='Generar reporte'/> 
    </>
  )
}
export default HomeDepartamento;