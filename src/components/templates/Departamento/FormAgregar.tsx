import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import BtnAction from "../../atoms/Buttons/Button.jsx";
import FormInput from "../../atoms/Inputs/InputText.jsx";
import api from "../../../axiosData.mjs";
import { useNavigate } from "react-router-dom";
import { DepartamentAddState, NavegarProps } from "../../../types.js";

export const DepartmentAdd = ({ Navegar }: NavegarProps) => {

  const [nombreDepartamento, setNombreDepartamento] = useState<DepartamentAddState["nombre"]>("");
  const [descripcion, setDescripcion] = useState<DepartamentAddState["descripción"]>("");
  const [fecha, setFecha] = useState<DepartamentAddState["fecha_creacion"]>("");
  const [encargado, setEncargado] = useState<DepartamentAddState["encargado"]>("");
  const [data, setData] = useState<DepartamentAddState["departamentoData"]>([]);

  const agregarDatos = async () => {
    const postData = {
      nombre: nombreDepartamento,
      descripción: descripcion,
      fecha_creacion: fecha,
      encargado: encargado
    };

    try {
      const response = await api.post("/departamento", postData);
      setData([...data, response.data]);
      alert("Los datos se han agregado correctamente");
      handleNavigate();
    } catch (error) {
      console.error(error);
  }
}

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/Departamentos");
  };


  return (
    <>
      <Form>
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
          <br />
          <FormInput
            InputTitle="Fecha de creación"
            InputType="date"
            InputName="fecha_creacion"
            Inputvalue={fecha}
            InputChange={(e) => setFecha(e.target.value.toString())}
          />
        </Form.Group>
      </Form>
      <BtnAction btnlabel="Cancelar" btncolor="secondary" action={Navegar} />
      <BtnAction btnlabel="Guardar" btncolor="primary" action={agregarDatos} />
    </>
  );
};

export default DepartmentAdd;