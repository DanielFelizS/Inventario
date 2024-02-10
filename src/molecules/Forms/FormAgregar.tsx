import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import BtnAction from "../../atoms/Buttons/Button.jsx";
import SelectForm from "../../atoms/Inputs/InputEstado.jsx";
import InputDoble from "../../atoms/Inputs/InputCarac.jsx";
import FormInput from "../../atoms/Inputs/InputText.jsx";
import api from "../../axiosData.mjs";
import { useNavigate } from "react-router-dom";
import { FormAddState, NavegarProps } from "../../types.js";

export const FormAdd = ({ Navegar }: NavegarProps) => {

  const [nombreEquipo, setNombreEquipo] = useState<FormAddState["nombreEquipo"]>("");
  const [marca, setMarca] = useState<FormAddState["marca"]>("");
  const [modelo, setModelo] = useState<FormAddState["modelo"]>("");
  const [noSerie, setNoSerie] = useState<FormAddState["noSerie"]>("");
  const [inventario, setInventario] = useState<FormAddState["inventario"]>("");
  const [bienesNacionales, setBienesNacionales] = useState<FormAddState["bienesNacionales"]>(0);
  const [propietario, setPropietario] = useState<FormAddState["propietario"]>("");
  const [estado, setEstado] = useState<FormAddState["estado"]>("");
  const [fecha, setFecha] = useState<FormAddState["fecha"]>("");
  const [data, setData] = useState<FormAddState["data"]>([]);

  const agregarDatos = async () => {
    const postData = {
      nombre_equipo: nombreEquipo,
      marca: marca,
      modelo: modelo,
      serial_no: noSerie,
      cod_inventario: inventario,
      bienes_nacionales: bienesNacionales,
      propietario_equipo: propietario,
      estado: estado,
      fecha_modificacion: fecha,
    };

    try {
      const response = await api.post("/dispositivos", postData);
      // console.log(response);
      setData([...data, response.data]);
      alert("Los datos se han agregado correctamente");

      handleNavigate();
    } catch (error) {
      console.error(error);
  }
}

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/Inicio");
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="">
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
          <FormInput
            InputTitle="Propietario del equipo"
            InputType="text"
            InputName="propietario"
            Inputvalue={propietario}
            InputChange={(e) => setPropietario(e.target.value)}
          />
          <br />
          <SelectForm
            Inputvalue={estado}
            InputChange={(e) => setEstado(e.target.value)}
            InputName="Estado"
            Select1="Dañado"
            Select2="Funcionando"
            Select3="En reparación"
          />
          <br />
          <FormInput
            InputTitle="Fecha de modificación"
            InputType="date"
            InputName="fecha_modificacion"
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

export default FormAdd;