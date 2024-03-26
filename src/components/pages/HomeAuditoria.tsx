import Table from '../organisms/Table';
import BtnAction from "../atoms/Buttons/Button"
// import { useNavigate } from "react-router-dom";
import { saveAs } from 'file-saver';
import api from '../../axiosData.mts';
import InputBusqueda from '../atoms/Inputs/InputBusqueda';
import { useState } from 'react';
import Navigation from '../molecules/Navbar';

export const HomeAuditoria = () => {

  const [search, setSearch] = useState('');

  const handleChangeSearch = (e: any)=>{
    setSearch(e.target.value);
  }

  const Reporte = async () => {
    try {
      const response = await api.get(`/historial/reporte?filter=${search}`, { responseType: 'blob' });
      const blob = new Blob([response.data], { type: 'application/pdf' });
      saveAs(blob, 'Departamentos.pdf');
    } catch (error) {
      console.error(error);
    }
  };

  const ExportarExcel = async () => {
    try {
      const response = await api.get(`/historial/exportar-excel?filter=${search}`, { responseType: 'blob' });
      const blob = new Blob([response.data], { type: 'application/xlsx' });
      saveAs(blob, 'Auditorias.xlsx');
    } catch (error) {
      console.error(error);
    }
  }

  const Datos = ['id', 'tabla', 'usuario', 'acción', 'descripción', 'fecha'];
  const Headers = ['ID', 'Página', 'Usuario', 'Acción', 'Descripción', 'Fecha'];

  return (
    <>
      <Navigation/>
      <div className='btn-Agregar'>

        <InputBusqueda SearchValue={search} EventSearch={handleChangeSearch} />

        <BtnAction btncolor='success' action={Reporte} btnlabel='Generar reporte'/>
        <BtnAction btncolor='success' action={ExportarExcel} btnlabel='ExportarExcel'/> 
      </div>
      <br />

      <Table APIPath='historial' APINames= {Datos} EditarDatos={''} EliminarDatos={''} searchData={search} Header={Headers}/>
    </>
  )
}
export default HomeAuditoria;