import {
  Table, BtnAction, useNavigate,
  saveAs, api, InputBusqueda,
  useState, Navigation 
} from '../Page'

export const HomeDepartamento = () => {

  const [search, setSearch] = useState('');
  const [file, setFile] = useState<any>(null);
  // const [ progress, setProgress ] = useState({ started: false, bar: 0});
  const [msg, setMsg] = useState("");

  const handleChangeSearch = (e: any)=>{
    setSearch(e.target.value);
  }
  const handleFile = (e: any) => {
    setFile(e.target.files[0]);
  }

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/AgregarDepartamento");
  };

  const Reporte = async () => {
    setMsg("Generando reporte...");
    try {
      const response = await api.get(`/departamento/reporte?filter=${search}`, { responseType: 'blob' });
      const blob = new Blob([response.data], { type: 'application/pdf' });
      saveAs(blob, 'Departamentos.pdf');
      setMsg("Descarga exitosa");
    } catch (error) {
      setMsg("La exportación del reporte ha fallado");
      console.error(error);
    }
  };

  const ImportarExcel = async () => {
    try {
      if (!file) {
        setMsg("No hay un archivo seleccionado");
      }
      const formData = new FormData();
      formData.append('excel', file);
      setMsg("Subiendo archivo...");
      // setProgress(prevState => {
      //   return {...prevState, started: true}
      // })
      api.post('/departamento/importar-excel', formData,  {
        // onUploadProgress: (progressEvent) => {setProgress(prevState => {
        //     return {...prevState, bar: progressEvent.progress*100}
        //   })},
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    } catch (error) {
      setMsg("Carga fallida");
      console.error(error);
    }
  }

  const ExportarExcel = async () => {
    setMsg("Generando excel...");
    try {
      const response = await api.get(`/departamento/exportar-excel?filter=${search}`, { responseType: 'blob' });
      const blob = new Blob([response.data], { type: 'application/xlsx' });
      saveAs(blob, 'Departamentos.xlsx');
      setMsg("Descarga exitosa");
    } catch (error) {
      setMsg("La exportación del excel ha fallado");
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
      <br/>

      <input type="file" accept=".xlsx, .xls" onChange={handleFile}/>
      <BtnAction btncolor='success' action={ImportarExcel} btnlabel='Importar excel'/>
      {/* { progress.started && <progress max="100" value={progress.bar}></progress> } */}
      { msg && <span style={{color:"red"}}>{msg}</span> }
      <br />
      <Table APIPath='departamento' APINames= {Datos} EditarDatos={'EditarDepartamento'} EliminarDatos={'EliminarDepartamento'} searchData={search} Header={Headers}/>
      <br />
      <BtnAction btncolor='success' action={Reporte} btnlabel='Generar reporte'/>
      <BtnAction btncolor='success' action={ExportarExcel} btnlabel='Exportar a excel'/> 
    </>
  )
}
export default HomeDepartamento;