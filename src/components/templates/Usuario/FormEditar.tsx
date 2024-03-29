import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import FormInput from "../../atoms/Inputs/InputText.jsx";
import api from "../../../axiosData.mjs";
import BtnAction from "../../atoms/Buttons/Button.js";
import { useParams, useNavigate } from "react-router-dom";
import { CerrarProps, UserEditState } from "../../../types.js";

export const UserEdit = ({ btnCerrar }: CerrarProps) => {
  const [edit, setEdit] = useState<UserEditState>({
    id: "",
    firstName: "",
    lastName: "",
    userName: "",
    email: ""
  });
  const [error, setError] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    try {
      const response = await api.get(`/usuarios/${id}`);
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
        setError("El ID del usuario es requerido");
        alert(error);
      }

      const response = await api.put(`/usuarios/${edit.id}`, edit);
      // console.log(response.data);
      alert(response.data);
      btnCerrar();
      navigate("/Usuarios");
    } catch (error) {
      alert(error);
      setError("Ocurrió un error al editar el usuario");
    }
  };

  return (
    <>
      <Form className="FormData">
        <Form.Group className="mb-3" controlId="">
          <FormInput
            InputTitle="Nombre"
            InputType="text"
            InputName="firstName"
            Inputvalue={edit.firstName}
            InputChange={handleInputChange}
          />

          <FormInput
            InputTitle="Apellido"
            InputType="text"
            InputName="lastName"
            Inputvalue={edit.lastName} 
            InputChange={handleInputChange}
          />

          <FormInput
            InputTitle="Nombre de usuario"
            InputType="text"
            InputName="userName"
            Inputvalue={edit.userName}
            InputChange={handleInputChange}
          />
          <FormInput
            InputTitle="Email"
            InputType="text"
            InputName="email"
            Inputvalue={edit.email}
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
    </>
  );
};

export default UserEdit;
