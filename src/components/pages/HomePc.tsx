import Table from '../organisms/Table';
import BtnAction from "../atoms/Buttons/Button"
import { useNavigate } from "react-router-dom";
import { saveAs } from 'file-saver';
import api from '../../axiosData.mts';
import InputBusqueda from '../atoms/Inputs/InputBusqueda';
import { useState } from 'react';
import Navigation from '../molecules/Navbar';

export const HomeComputer = () => {

  const [search, setSearch] = useState('');

  const handleChangeSearch = (e: any)=>{
    setSearch(e.target.value);
  }

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/AgregarPc");
  };
  
  const Reporte = async () => {
    try {
      const response = await api.get(`/computer/reporte?filter=${search}`, { responseType: 'blob' });
      const blob = new Blob([response.data], { type: 'application/pdf' });
      saveAs(blob, 'Detalle_Computadoras.pdf');
    } catch (error) {
      console.error(error);
    }
  };

  const ExportarExcel = async () => {
    try {
      const response = await api.get(`/computer/exportar-excel?filter=${search}`, { responseType: 'blob' });
      const blob = new Blob([response.data], { type: 'application/xlsx' });
      saveAs(blob, 'ComponentesPc.xlsx');
    } catch (error) {
      console.error(error);
    }
  }

  const Datos = ['id', 'nombre_equipo', 'ram', 'disco_duro', 'procesador', 'ventilador', 'fuentePoder', 'motherBoard', 'tipo_MotherBoard'];

  const Headers = ['ID', 'Equipo', 'RAM', 'Disco duro', 'Procesador', 'Ventilador', 'Fuente de poder', 'Motherboard', 'Tipo de motherboard'];

  return (
    <>
      <Navigation/>
      <div className='btn-Agregar'>
        <InputBusqueda SearchValue={search} EventSearch={handleChangeSearch} />
        <BtnAction btncolor='success' action={handleNavigate} btnlabel='Agregar equipo'/> 
      </div>
      <br />

      <Table APIPath='computer' APINames={Datos} EditarDatos={'EditarPc'} EliminarDatos={'EliminarPc'} searchData={search} Header={Headers}/>
      <br />
      <BtnAction btncolor='success' action={Reporte} btnlabel='Generar reporte'/> 
      <BtnAction btncolor='success' action={ExportarExcel} btnlabel='Exportar excel'/> 

    </>
  )
}

export default HomeComputer;