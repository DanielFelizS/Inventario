import Table from '../organisms/Table';
import BtnAction from "../atoms/Buttons/Button"
import { useNavigate } from "react-router-dom";
import { saveAs } from 'file-saver';
import api from '../../axiosData.mts';
import InputBusqueda from '../atoms/Inputs/InputBusqueda';
import { useState } from 'react';
import Navigation from '../molecules/Navbar';

export const HomeDepartamento = () => {

  const [search, setSearch] = useState('');

  const handleChangeSearch = (e: any)=>{
    setSearch(e.target.value);
  }

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/AgregarDepartamento");
  };

  const Reporte = async () => {
    try {
      const response = await api.get(`/departamento/reporte?filter=${search}`, { responseType: 'blob' });
      const blob = new Blob([response.data], { type: 'application/pdf' });
      saveAs(blob, 'Departamentos.pdf');
    } catch (error) {
      console.error(error);
    }
  };

  const ExportarExcel = async () => {
    try {
      const response = await api.get(`/departamento/exportar-excel?filter=${search}`, { responseType: 'blob' });
      const blob = new Blob([response.data], { type: 'application/xlsx' });
      saveAs(blob, 'Departamentos.xlsx');
    } catch (error) {
      console.error(error);
    }
  }

  const Datos = ['id', 'nombre', 'descripción', 'fecha_creacion', 'encargado'];
  const Headers = ['ID', 'Nombre', 'Descripción', 'Fecha de creación', 'Encargado del departamento'];

  return (
    <>
      <Navigation/>
      <div className='btn-Agregar'>

        <InputBusqueda SearchValue={search} EventSearch={handleChangeSearch} />

        <BtnAction btncolor='success' action={handleNavigate} btnlabel='Agregar departamento'/> 
      </div>
      <br />
      <Table APIPath='departamento' APINames= {Datos} EditarDatos={'EditarDepartamento'} EliminarDatos={'EliminarDepartamento'} searchData={search} Header={Headers}/>
      <br />
      <BtnAction btncolor='success' action={Reporte} btnlabel='Generar reporte'/>
      <BtnAction btncolor='success' action={ExportarExcel} btnlabel='Exportar a excel'/> 
    </>
  )
}
export default HomeDepartamento;