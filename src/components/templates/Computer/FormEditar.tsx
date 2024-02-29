import React, { useState, useEffect } from "react";
import BtnAction from "../../atoms/Buttons/Button.jsx";
import { Form } from "react-bootstrap";
import InputDoble from "../../atoms/Inputs/InputCarac.jsx";
import FormInput from "../../atoms/Inputs/InputText.jsx";
import api from "../../../axiosData.mjs";
import { useParams, useNavigate } from "react-router-dom";
import { CerrarProps, ComputerEditState } from "../../../types.js";

export const ComputerEdit = ({ btnCerrar }: CerrarProps) => {
  const [edit, setEdit] = useState<ComputerEditState>({
    id: "",
    equipo_Id: "",
    ram: "",
    disco_duro: "",
    procesador: "",
    ventilador: "",
    fuentePoder: "",
    motherBoard: "",
    tipo_MotherBoard: ""
  });
  const [dispositivos, setDispositivos] = useState<any>([]);
  // const [departamentoId, setDepartamentoId] = useState<ComputerEditState["departamentoId"]>();
  const [error, setError] = useState("");


  useEffect(() => {
    ObtenerDepartameto();
  }, []);

  const ObtenerDepartameto = async () => {
    try {
      const request = await api.get(`/dispositivos`);
      if (Array.isArray(request.data.items)) {
        setDispositivos(request.data.items);
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
      const response = await api.get(`/computer/${id}`);
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
        setError("El ID de la computadora es requerida");
        alert(error);
      }

      const response = await api.put(`/computer/${edit.id}`, edit);
      // console.log(response.data);
      alert(response.data);
      btnCerrar();
      navigate("/Computer");
    } catch (error) {
      alert(error);
      setError("Ocurrió un error al editar el dispositivo");
    }
  };

        // Función para manejar cuando el usuario selecciona un departamento
        const handleDispositivoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
          const id = e.target.value;
          setEdit((prevState) => ({
            ...prevState,
            equipo_Id: id,
          }));
          // setDepartamentoId(id);
        };
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="">
        <label>Equipo</label>
          <br />
          <select value={edit.equipo_Id} onChange={handleDispositivoChange}>
            {dispositivos.map((dispositivo: any) => (
                <option key={dispositivo.id} value={dispositivo.id}>{dispositivo.nombre_equipo}</option>
            ))}
        </select>

          <InputDoble
            InputName="RAM y Disco duro"
            FirstValue={edit.ram}
            FirstChange={handleInputChange}
            FirstType="text"
            FirstPlaceholder="4 GB"
            FirstName="ram"
            SecondValue={edit.disco_duro}
            SecondChange={handleInputChange}
            SecondType="text"
            SecondPlaceholder="Capac. almacenamiento y tipo de disco"
            SecondName="disco_duro"
          />

          <FormInput
            InputTitle="Procesador"
            InputType="text"
            InputName="procesador"
            Inputvalue={edit.procesador}
            InputChange={handleInputChange}
          />

          <FormInput
            InputTitle="Ventilador"
            InputType="text"
            InputName="ventilador"
            Inputvalue={edit.ventilador} 
            InputChange={handleInputChange}
          />

          <FormInput
            InputTitle="Fuente de poder"
            InputType="text"
            InputName="fuentePoder"
            Inputvalue={edit.fuentePoder} 
            InputChange={handleInputChange}
          />

          <InputDoble
            InputName="Motherboard y tipo"
            FirstValue={edit.motherBoard}
            FirstChange={handleInputChange}
            FirstType="text"
            FirstPlaceholder="AORUS"
            FirstName="motherBoard"
            SecondValue={edit.tipo_MotherBoard}
            SecondChange={handleInputChange}
            SecondType="text"
            SecondPlaceholder="B650 AORUS Elite AX "
            SecondName="tipo_MotherBoard"
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

export default ComputerEdit;
