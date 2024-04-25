import {
  useState, Form,
  BtnAction, InputDoble, SelectForm,
  FormInput } from '../Dependencies.js';
import { NavegarProps } from '../../../types.js';
import { DevicesAddState } from './DevicesTypes.js';
import useGet from '../../utils/CustomHooks/useGet.js';
import usePost from '../../utils/CustomHooks/usePost.js';

export const DevicesAdd = ({ Navegar }: NavegarProps) => {
  const [nombreEquipo, setNombreEquipo] = useState<DevicesAddState["nombreEquipo"]>("");
  const [marca, setMarca] = useState<DevicesAddState["marca"]>("");
  const [modelo, setModelo] = useState<DevicesAddState["modelo"]>("");
  const [noSerie, setNoSerie] = useState<DevicesAddState["noSerie"]>("");
  const [inventario, setInventario] = useState<DevicesAddState["inventario"]>("");
  const [bienesNacionales, setBienesNacionales] = useState<DevicesAddState["bienesNacionales"]>(0);
  const [propietario, setPropietario] = useState<DevicesAddState["propietario"]>("");
  const [nombreWindows, setNombreWindows] = useState<DevicesAddState["nombre_windows"]>("");
  const [departamentoId, setDepartamentoId] = useState<DevicesAddState["departamentoId"]>();
  const [estado, setEstado] = useState<DevicesAddState["estado"]>("");
  const [fecha, setFecha] = useState<DevicesAddState["fecha"]>("");

  const {departamentos} = useGet({ url: '/departamentos/all'})
  const { msg, agregarDatos } = usePost("dispositivos");

  const handleAgregarDatos = async () => {
    const postData = {
      nombre_equipo: nombreEquipo,
      marca: marca,
      modelo: modelo,
      serial_no: noSerie,
      cod_inventario: inventario,
      bienes_nacionales: bienesNacionales,
      propietario_equipo: propietario,
      nombre_windows: nombreWindows,
      estado: estado,
      fecha_modificacion: fecha,
      departamentoId: departamentoId,
    };
    agregarDatos(postData)
  };

  // Función para manejar cuando el usuario selecciona un departamento
  const handleDepartamentoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setDepartamentoId(id);
  };

  return (
    <>
      <Form className="FormData">
        <Form.Group className="mb-3" controlId="">
          {/* Inputs */}
          <FormInput
            InputTitle="Nombre del equipo"
            InputType="text"
            InputName="nombre_equipo"
            Inputvalue={nombreEquipo}
            InputChange={(e) => setNombreEquipo(e.target.value)}
          />

          <InputDoble
            InputName="Marca y modelo"
            FirstValue={marca}
            FirstChange={(e) => setMarca(e.target.value)}
            FirstType="text"
            FirstPlaceholder="Dell"
            FirstName="marca"
            SecondValue={modelo}
            SecondChange={(e) => setModelo(e.target.value)}
            SecondType="text"
            SecondPlaceholder="Optiplex 3000"
            SecondName="modelo"
          />
          <FormInput
            InputTitle="Número de serie (Service Tag)"
            InputType="text"
            InputName="serial_no"
            Inputvalue={noSerie}
            InputChange={(e) => setNoSerie(e.target.value)}
          />
          <InputDoble
            InputName="Código de inventario y Bienes nacionales"
            FirstValue={inventario}
            FirstChange={(e) => setInventario(e.target.value)}
            FirstType="text"
            FirstPlaceholder="Invi"
            FirstName="cod_inventario"
            SecondValue={bienesNacionales}
            SecondChange={(e) => setBienesNacionales(Number(e.target.value))}
            SecondType="number"
            SecondPlaceholder="Bienes nacionales"
            SecondName="bienes_nacionales"
          />
          <InputDoble
            InputName="Propietario del equipo y Nombre (usuario de windows)"
            FirstValue={propietario}
            FirstChange={(e) => setPropietario(e.target.value)}
            FirstType="text"
            FirstPlaceholder="Faustino Acevedo"
            FirstName="propietario"
            SecondValue={nombreWindows}
            SecondChange={(e) => setNombreWindows(e.target.value)}
            SecondType="text"
            SecondPlaceholder="Filipino Perez"
            SecondName="nombre_windows"
          />
          {/* Departamento */}
          <br />
          <label>Departamento</label>
          <br />
          <select value={departamentoId} onChange={handleDepartamentoChange} className="SelectData">
            <option disabled>Nombre del departamento</option>
            {departamentos.map((departamento: any) => (
              <option key={departamento.id} value={departamento.id}>
                {departamento.nombre}
              </option>
            ))}
          </select>
          <br />
          {/* Estado del equipo */}
          <SelectForm
            Inputvalue={estado}
            InputChange={(e) => setEstado(e.target.value)}
            InputName="Estado"
            Select1="Dañado"
            Select2="Funcionando"
            Select3="En reparación"
            Select4="Irreparable"
          />
          {/* Input */}
          <FormInput
            InputTitle="Fecha de modificación"
            InputType="date"
            InputName="fecha_modificacion"
            Inputvalue={fecha}
            InputChange={(e) => setFecha(e.target.value.toString())}
          />
        </Form.Group>
      <BtnAction btnlabel="Cancelar" btncolor="danger" action={Navegar} />
      <BtnAction btnlabel="Guardar" btncolor="success" action={handleAgregarDatos} />
      </Form>

      { msg && <span>{msg}</span> }
    </>
  );
};

export default DevicesAdd;