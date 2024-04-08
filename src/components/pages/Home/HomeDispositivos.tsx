import {
  Table, BtnAction, useNavigate,
  saveAs, api, InputBusqueda,
  useState, Navigation 
} from '../Page'

export const HomeDispositivos = () => {
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

  const Reporte = async () => {
    setMsg("Generando reporte...");
    try {
      const response = await api.get(`/dispositivos/reporte?filter=${search}`, { responseType: 'blob' });
      const blob = new Blob([response.data], { type: 'application/pdf' });
      saveAs(blob, 'Detalle_Equipos.pdf');
      setMsg("Descarga exitosa");

    } catch (error) {
      setMsg("La exportación del reporte ha fallado");
      console.error(error);
    }
  }
    
    const ExportarExcel = async () => {
      setMsg("Generando excel...");
      try {
        const response = await api.get(`/dispositivos/exportar-excel?filter=${search}`, { responseType: 'blob' });
        const blob = new Blob([response.data], { type: 'application/xlsx' });
        saveAs(blob, 'Equipos.xlsx');
        setMsg("Descarga exitosa");

      } catch (error) {
        setMsg("La exportación del excel ha fallado");
        console.error(error);
      }
    }

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
        api.post('/dispositivos/importar-excel', formData,  {
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
      {/* <FormInput Inputvalue={search} InputChange={handleChangeSearch} InputType='text' InputName='Buscar' /> */}
      <BtnAction btncolor='success' action={handleNavigate} btnlabel='Agregar equipo'/> 
      </div>

      <br />
      <input type="file" accept=".xlsx, .xls" onChange={handleFile}/>
      <BtnAction btncolor='success' action={ImportarExcel} btnlabel='Importar excel'/>
      {/* { progress.started && <progress max="100" value={progress.bar}></progress> } */}
      { msg && <span style={{color:"red"}}>{msg}</span> }

      <br />
      <Table APIPath='dispositivos' APINames={Datos} EditarDatos={'EditarDispositivo'} EliminarDatos={'EliminarDispositivos'} searchData={search} Header={Headers}/>
      <br/>
      <BtnAction btncolor='success' action={Reporte} btnlabel='Generar reporte'/>
      <BtnAction btncolor='success' action={ExportarExcel} btnlabel='Exportar excel'/>
    </>
  )
}

export default HomeDispositivos;