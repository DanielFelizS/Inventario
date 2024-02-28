import React, { useState, useEffect } from "react";
import BtnAction from "../../atoms/Buttons/Button.jsx";
import { Form } from "react-bootstrap";
import SelectForm from "../../atoms/Inputs/InputEstado.jsx";
import InputDoble from "../../atoms/Inputs/InputCarac.jsx";
import FormInput from "../../atoms/Inputs/InputText.jsx";
import api from "../../../axiosData.mjs";
import { useParams, useNavigate } from "react-router-dom";
import { CerrarProps, DispositivosEditState } from "../../../types.js";

export const FormEdit = ({ btnCerrar }: CerrarProps) => {
  const [edit, setEdit] = useState<DispositivosEditState>({
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
  // const [departamentoId, setDepartamentoId] = useState<DispositivosEditState["departamentoId"]>();
  const [error, setError] = useState("");


  useEffect(() => {
    ObtenerDepartameto();
  }, []);

  const ObtenerDepartameto = async () => {
    try {
      const request = await api.get(`/departamento`);
      if (Array.isArray(request.data.items)) {
        setDepartamentos(request.data.items);
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

      const response = await api.put(`/dispositivos/${edit.id}`, edit);
      // console.log(response.data);
      alert(response.data);
      btnCerrar();
      navigate("/Inicio");
    } catch (error) {
      alert(error);
      setError("Ocurrió un error al editar el dispositivo");
    }
  };

        // Función para manejar cuando el usuario selecciona un departamento
        const handleDepartamentoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
          const id = e.target.value;
          setEdit((prevState) => ({
            ...prevState,
            departamentoId: id,
          }));
          // setDepartamentoId(id);
        };
  return (
    <>
      <Form>
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
          <select value={edit.departamentoId} onChange={handleDepartamentoChange}>
            {departamentos.map((departamento: any) => (
              <option key={departamento.id} value={departamento.id}
              // selected={departamento.id === edit.departamentoId}
              >
                {departamento.nombre}
              </option>
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

export default FormEdit;
