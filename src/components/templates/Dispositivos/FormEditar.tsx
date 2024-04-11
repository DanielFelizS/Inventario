import {
  useState, useEffect, SelectForm,
  Form, BtnAction, InputDoble, FormInput, 
  api, useParams } from '../Dependencies.js';
import { CerrarProps } from "../../../types.js";
import { DevicesEditState } from './DevicesTypes.js';
import useGet from '../../utils/CustomHooks/useGet.js';
import usePut from '../../utils/CustomHooks/usePut.js';

export const DevicesEdit = ({ btnCerrar }: CerrarProps) => {
  const [edit, setEdit] = useState<DevicesEditState>({
    id: "",
    nombre_equipo: "",
    marca: "",
    modelo: "",
    serial_no: "",
    cod_inventario: "",
    bienes_nacionales: 0,
    propietario_equipo: "",
    nombre_windows: "",
    departamentoId: 0,
    estado: "",
    fecha_modificacion: "",
  });
  const [error, setError] = useState("");

  const {departamentos} = useGet({ url: `/departamentos/all`})
  const {msg, editarDatos} = usePut({ url: `dispositivos`, PropEdit: edit})

  const { id } = useParams();

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    try {
      const response = await api.get(`/dispositivos/${id}`);
      const fechaModificacion = response.data.fecha_modificacion.substring(0, 10); 
      setEdit({
      ...response.data,
      fecha_modificacion: fechaModificacion,
    })
    } catch (error) {
      setError("Error al consultarse los datos");
      console.error(error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEdit((prevEdit) => ({
      ...prevEdit,
      [name]: value,
    }));
  };

      // Función para manejar cuando el usuario selecciona un departamento
      const handleDepartamentoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const id = e.target.value;
        setEdit((prevState) => ({
          ...prevState,
          departamentoId: id
        }));
      };
      
  return (
    <>
      <Form className="FormData">
        <Form.Group className="mb-3" controlId="">
          <FormInput
            InputTitle="Nombre del equipo"
            InputType="text"
            InputName="nombre_equipo"
            Inputvalue={edit.nombre_equipo}
            InputChange={handleInputChange}
          />

          <InputDoble
            InputName="Marca y modelo"
            FirstValue={edit.marca}
            FirstChange={handleInputChange}
            FirstType="text"
            FirstPlaceholder="Dell"
            FirstName="marca"
            SecondValue={edit.modelo}
            SecondChange={handleInputChange}
            SecondType="text"
            SecondPlaceholder="Optiplex 3000"
            SecondName="modelo"
          />

          <FormInput
            InputTitle="Número de serie (Service Tag)"
            InputType="text"
            InputName="serial_no"
            Inputvalue={edit.serial_no}
            InputChange={handleInputChange}
          />

          <InputDoble
            InputName="Código de inventario y Bienes nacionales"
            FirstValue={edit.cod_inventario}
            FirstChange={handleInputChange}
            FirstType="text"
            FirstPlaceholder="Invi"
            FirstName="cod_inventario"
            SecondValue={edit.bienes_nacionales}
            SecondChange={handleInputChange}
            SecondType="number"
            SecondPlaceholder="Bienes nacionales"
            SecondName="bienes_nacionales"
          />

          <InputDoble
            InputName="Propietario del equipo y Nombre (usuario de windows)"
            FirstValue={edit.propietario_equipo}
            FirstChange={handleInputChange}
            FirstType="text"
            FirstPlaceholder="Faustino Acevedo"
            FirstName="propietario"
            SecondValue={edit.nombre_windows}
            SecondChange={handleInputChange}
            SecondType="text"
            SecondPlaceholder="Filipino Perez"
            SecondName="nombre_windows"
            />
          <br />
          <label>Departamento</label>
          <br />
          <select value={edit.departamentoId} onChange={handleDepartamentoChange} className="SelectData">
            <option disabled>Nombre del departamento</option>
            {departamentos.map((departamento: any) => (
              <option key={departamento.id} value={departamento.id}
              // selected={departamento.id === edit.departamentoId}
              >
                {departamento.nombre}</option>
            ))}
          </select>
          <br />

          <SelectForm
            Inputvalue={edit.estado}
            InputChange={handleInputChange}
            InputName="estado"
            Select1="Dañado"
            Select2="Funcionando"
            Select3="En reparación"
            Select4="Irreparable"
          />

          <FormInput
            InputTitle="Fecha de modificación"
            InputType="date"
            InputName="fecha_modificacion"
            Inputvalue={edit.fecha_modificacion}
            InputChange={handleInputChange}
          />

          <br />
          <BtnAction
            btnlabel="Cancelar"
            btncolor="danger"
            action={btnCerrar}
          />
          <BtnAction
            btnlabel="Guardar"
            btncolor="success"
            action={editarDatos}
          />
        </Form.Group>
      </Form>
      { msg && <span style={{color: "green"}}>{msg}</span> }
      { error && <span style={{color: "red"}}>{error}</span> }
    </>
  );
};

export default DevicesEdit;