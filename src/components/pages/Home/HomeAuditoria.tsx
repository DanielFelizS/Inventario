import {
  Table, BtnAction, 
  saveAs, api, InputBusqueda,
  useState, Navigation 
} from '../Page'

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