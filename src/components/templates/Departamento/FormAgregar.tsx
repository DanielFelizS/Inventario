import {
  useState,
  Form, BtnAction,
  FormInput, api,useNavigate } from '../Dependencies.js';
import { NavegarProps } from '../../../types.js';
import { DepartamentAddState } from './DepartmentTypes.js';

export const DepartmentAdd = ({ Navegar }: NavegarProps) => {
  const [nombreDepartamento, setNombreDepartamento] = useState<DepartamentAddState["nombre"]>("");
  const [descripcion, setDescripcion] = useState<DepartamentAddState["descripción"]>("");
  const [fecha, setFecha] = useState<DepartamentAddState["fecha_creacion"]>("");
  const [encargado, setEncargado] = useState<DepartamentAddState["encargado"]>("");
  const [data, setData] = useState<DepartamentAddState["departamentoData"]>([]);
  const [error, setError] = useState("");

  const agregarDatos = async () => {
    const postData = {
      nombre: nombreDepartamento,
      descripción: descripcion,
      fecha_creacion: fecha,
      encargado: encargado,
    };

    try {
      const response = await api.post("/departamento", postData);
      setData([...data, response.data]);
      alert("Los datos se han agregado correctamente");
      handleNavigate();
    } catch (error) {
      setError("Error al agregar los datos");
      console.error(error);
    }
  };

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/Departamentos");
  };

  return (
    <>
      <Form className="FormData">
        <Form.Group className="mb-3" controlId="">
          <FormInput
            InputTitle="Nombre del departamento"
            InputType="text"
            InputName="nombre"
            Inputvalue={nombreDepartamento}
            InputChange={(e) => setNombreDepartamento(e.target.value)}
          />

          <FormInput
            InputTitle="Descripción (Objetivo del departamento)"
            InputType="text"
            InputName="descripción"
            Inputvalue={descripcion}
            InputChange={(e) => setDescripcion(e.target.value)}
          />

          <FormInput
            InputTitle="Encargado del departamento"
            InputType="text"
            InputName="encargado"
            Inputvalue={encargado}
            InputChange={(e) => setEncargado(e.target.value)}
          />
          <FormInput
            InputTitle="Fecha de creación"
            InputType="date"
            InputName="fecha_creacion"
            Inputvalue={fecha}
            InputChange={(e) => setFecha(e.target.value.toString())}
          />
        </Form.Group>
        <BtnAction btnlabel="Cancelar" btncolor="danger" action={Navegar} />
        <BtnAction
          btnlabel="Guardar"
          btncolor="success"
          action={agregarDatos}
        />
      </Form>
      { error && <span style={{color: "red"}}>{error}</span> }
    </>
  );
};

export default DepartmentAdd;
