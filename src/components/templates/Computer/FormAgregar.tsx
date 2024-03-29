import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import BtnAction from "../../atoms/Buttons/Button.jsx";
import InputDoble from "../../atoms/Inputs/InputCarac.jsx";
import FormInput from "../../atoms/Inputs/InputText.jsx";
import api from "../../../axiosData.mjs";
import { useNavigate } from "react-router-dom";
import { ComputerAddState, NavegarProps } from "../../../types.js";

export const ComputerAdd = ({ Navegar }: NavegarProps) => {

  const [idEquipo, setIdEquipo] = useState<ComputerAddState["equipo_Id"]>("");
  const [ram, setRam] = useState<ComputerAddState["ram"]>("");
  const [discoDuro, setDiscoDuro] = useState<ComputerAddState["disco_duro"]>("");
  const [procesador, setProcesador] = useState<ComputerAddState["procesador"]>("");
  const [ventilador, setVentilador] = useState<ComputerAddState["ventilador"]>("");
  const [fuentePoder, setFuentePoder] = useState<ComputerAddState["fuentePoder"]>("");
  const [motherBoard, setMotherBoard] = useState<ComputerAddState["motherBoard"]>("");
  const [tipoMotherBoard, setTipoMotherBoard] = useState<ComputerAddState["tipo_MotherBoard"]>("");
  const [data, setData] = useState<ComputerAddState["ComputerData"]>([]);
  const [dispositivos, setDispositivos] = useState<any>([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    try {
      const response = await api.get(`/dispositivos/all`);
      if (Array.isArray(response.data)) {
        setDispositivos(response.data);
      } else {
        console.error('Error: la respuesta de la API no contiene un array', response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const agregarDatos = async () => {
    const postData = {
      equipo_Id: idEquipo,
      ram: ram,
      disco_duro: discoDuro,
      procesador: procesador,
      ventilador: ventilador,
      fuentePoder: fuentePoder,
      motherBoard: motherBoard,
      tipo_MotherBoard: tipoMotherBoard
    };

    try {
      const response = await api.post("/computer", postData);
      setData([...data, response.data]);
      console.log(idEquipo);
      alert("Los datos se han agregado correctamente");
      handleNavigate();
    } catch (error) {
      console.error(error);
  }
}

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/Computer");
  };

  // Función para manejar cuando el usuario selecciona un departamento
  const handleDispositivoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setIdEquipo(id);
  };

  return (
    <>
      <Form className="FormData">
        <Form.Group className="mb-3" controlId="">

          <label>Equipo</label>
          <br />
          <select value={idEquipo} onChange={handleDispositivoChange} className="SelectData">
            <option disabled>ID, Modelo, Serial no.</option>
            {dispositivos.map((dispositivo: any) => {
              if (dispositivo.nombre_equipo === "CPU" || dispositivo.nombre_equipo === "Laptop") {
                return <option key={dispositivo.id} value={dispositivo.id}>{dispositivo.id}, {dispositivo.modelo}, {dispositivo.serial_no}</option>;
              }
            })}
          </select>

          <br />
          <InputDoble
            InputName="RAM y Disco duro"
            FirstValue={ram}
            FirstChange={(e) => setRam(e.target.value)}
            FirstType="text"
            FirstPlaceholder="32 GB"
            FirstName="ram"
            SecondValue={discoDuro}
            SecondChange={(e) => setDiscoDuro(e.target.value)}
            SecondType="text"
            SecondPlaceholder="Capac. almacenamiento y tipo de disco"
            SecondName="disco_duro"
          />

          <FormInput
            InputTitle="Procesador"
            InputType="text"
            InputName="procesador"
            Inputvalue={procesador}
            InputChange={(e) => setProcesador(e.target.value)}
          />

          <FormInput
            InputTitle="Ventilador"
            InputType="text"
            InputName="ventilador"
            Inputvalue={ventilador} 
            InputChange={(e) => setVentilador(e.target.value)}
          />

          <FormInput
            InputTitle="Fuente de poder"
            InputType="text"
            InputName="fuentePoder"
            Inputvalue={fuentePoder} 
            InputChange={(e) => setFuentePoder(e.target.value)}
          />

          <InputDoble
            InputName="Motherboard y tipo"
            FirstValue={motherBoard}
            FirstChange={(e) => setMotherBoard(e.target.value)}
            FirstType="text"
            FirstPlaceholder="AORUS"
            FirstName="motherBoard"
            SecondValue={tipoMotherBoard}
            SecondChange={(e) => setTipoMotherBoard(e.target.value)}
            SecondType="text"
            SecondPlaceholder="B650 AORUS Elite AX "
            SecondName="tipo_MotherBoard"
          />
        </Form.Group>
      <BtnAction btnlabel="Cancelar" btncolor="danger" action={Navegar} />
      <BtnAction btnlabel="Guardar" btncolor="success" action={agregarDatos} />
      </Form>

    </>
  );
};

export default ComputerAdd;