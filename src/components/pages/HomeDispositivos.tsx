import Table from '../organisms/Table';
import BtnAction from "../atoms/Buttons/Button";
import { useNavigate } from "react-router-dom";
import api from '../../axiosData.mts';
import { saveAs } from 'file-saver';
import { useState } from 'react';
import InputBusqueda from '../atoms/Inputs/InputBusqueda';
import Navigation from '../molecules/Navbar';

export const HomeDispositivos = () => {
  const [search, setSearch] = useState('');

  const handleChangeSearch = (e: any)=>{
    setSearch(e.target.value);
  }

  const Reporte = async () => {
    try {
      const response = await api.get(`/dispositivos/reporte?filter=${search}`, { responseType: 'blob' });
      const blob = new Blob([response.data], { type: 'application/pdf' });
      saveAs(blob, 'Detalle_Equipos.pdf');
    } catch (error) {
      console.error(error);
    }
  }
    
    const ExportarExcel = async () => {
      try {
        const response = await api.get(`/dispositivos/exportar-excel?filter=${search}`, { responseType: 'blob' });
        const blob = new Blob([response.data], { type: 'application/xlsx' });
        saveAs(blob, 'Equipos.xlsx');
      } catch (error) {
        console.error(error);
      }
    }

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/AgregarDispositivo");
  };
  const Datos = ['id', 'nombre_equipo', 'marca', 'modelo', 'estado', 'serial_no', 'cod_inventario', 'bienes_nacionales', 'fecha_modificacion', 'propietario_equipo', 'nombre_departamento'];

  const Headers = ['ID', 'Equipo', 'Marca', 'Modelo', 'Estado', 'Serial no.', 'INVI', 'Bienes nacionales', 'Fecha de modificación', 'Propietario del equipo', 'Departamento'];

  return (
    <>
      <Navigation/>
      <div className='btn-Agregar'>

      <InputBusqueda SearchValue={search} EventSearch={handleChangeSearch} />

      <BtnAction btncolor='success' action={handleNavigate} btnlabel='Agregar equipo'/> 
      </div>
      <br />
      <select value={search} onChange={handleChangeSearch} className="SelectData">
            <option disabled>Estado del equipo</option>
              <option>Dañado</option>
              <option>Funcionando</option>
              <option>En reparación</option>
              <option>Irreparable</option>
          </select>

      <br />
      <Table APIPath='dispositivos' APINames={Datos} EditarDatos={'EditarDispositivo'} EliminarDatos={'EliminarDispositivos'} searchData={search} Header={Headers}/>
      <br/>
      <BtnAction btncolor='success' action={Reporte} btnlabel='Generar reporte'/>
      <BtnAction btncolor='success' action={ExportarExcel} btnlabel='Exportar excel'/>
    </>
  )
}

export default HomeDispositivos;