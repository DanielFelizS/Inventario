import {
  useState, useEffect,
  Form, BtnAction,
  FormInput, api,useNavigate, useParams } from '../Dependencies.js';
import { DepartamentEditState } from "./DepartmentTypes";
import { CerrarProps } from "../../../types.js";

export const DepartmentEdit = ({ btnCerrar }: CerrarProps) => {
  const [edit, setEdit] = useState<DepartamentEditState>({
    id: "",
    nombre: "",
    descripción: "",
    fecha_creacion: "",
    encargado: ""
  });
  const [error, setError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    try {
      const response = await api.get(`/departamento/${id}`);
      setEdit(response.data);
    } catch (error) {
      setError("Error al obtener los datos del departamento");
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
        console.log(error);
      }

      const response = await api.put(`/departamento/${edit.id}`, edit);
      // console.log(response.data);
      alert(response.data);
      btnCerrar();
      navigate("/Departamentos");
    } catch (error) {
      setError("Ocurrió un error al editar el departamento");
      console.log(error);
    }
  };

  return (
    <>
      <Form className="FormData">
        <Form.Group className="mb-3" controlId="">
          <FormInput
            InputTitle="Nombre del departamento"
            InputType="text"
            InputName="nombre"
            Inputvalue={edit.nombre}
            InputChange={handleInputChange}
          />

          <FormInput
            InputTitle="Descripción (Objetivo del departamento)"
            InputType="text"
            InputName="descripción"
            Inputvalue={edit.descripción} 
            InputChange={handleInputChange}
          />

          <FormInput
            InputTitle="Encargado del departamento"
            InputType="text"
            InputName="encargado"
            Inputvalue={edit.encargado}
            InputChange={handleInputChange}
          />
          <br />
          <FormInput
            InputTitle="Fecha de creación"
            InputType="date"
            InputName="fecha_creacion"
            Inputvalue={edit.fecha_creacion}
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

export default DepartmentEdit;
