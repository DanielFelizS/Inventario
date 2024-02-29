import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import FormInput from "../../atoms/Inputs/InputText.jsx";
import api from "../../../axiosData.mjs";
import BtnAction from "../../atoms/Buttons/Button.js";
import { useParams, useNavigate } from "react-router-dom";
import { CerrarProps, DepartamentEditState } from "../../../types.js";

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
        alert(error);
      }

      const response = await api.put(`/departamento/${edit.id}`, edit);
      // console.log(response.data);
      alert(response.data);
      btnCerrar();
      navigate("/Departamentos");
    } catch (error) {
      alert(error);
      setError("Ocurrió un error al editar el dispositivo");
    }
  };

  return (
    <>
      <Form>
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
            btncolor="secondary"
            action={btnCerrar}
          />
          <BtnAction
            btnlabel="Guardar"
            btncolor="primary"
            action={editarDatos}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default DepartmentEdit;
