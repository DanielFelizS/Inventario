import {
  useState, useEffect, SelectForm,
  Form, BtnAction, InputDoble, FormInput, 
  api,useNavigate, useParams } from '../Dependencies.js';
import { CerrarProps } from "../../../types.js";
import { DevicesEditState } from './DevicesTypes.js';

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
    departamentoId: 0,
    estado: "",
    fecha_modificacion: "",
  });
  const [departamentos, setDepartamentos] = useState<any>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    ObtenerDepartameto();
  }, []);

  const ObtenerDepartameto = async () => {
    try {
      const request = await api.get(`/departamento/all`);
      if (Array.isArray(request.data)) {
        setDepartamentos(request.data);
      } else {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    try {
      const response = await api.get(`/dispositivos/${id}`);
      setEdit(response.data);
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

  const editarDatos = async () => {
    try {
      if (!edit.id) {
        setError("El ID del dispositivo es requerido");
        console.error(error);
      }

      const response = await api.put(`/dispositivos/${edit.id}`, edit);
      alert(response.data);
      btnCerrar();
      navigate("/Dispositivo");
    } catch (error) {
      setError("Ocurrió un error al editar el dispositivo");
      console.error(error);
    }
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

          <FormInput
            InputTitle="Propietario del equipo"
            InputType="text"
            InputName="propietario_equipo"
            Inputvalue={edit.propietario_equipo}
            InputChange={handleInputChange}
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
      { error && <span style={{color: "red"}}>{error}</span> }
    </>
  );
};

export default DevicesEdit;
