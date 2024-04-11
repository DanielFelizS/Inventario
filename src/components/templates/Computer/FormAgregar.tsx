import {
  useState, Form, BtnAction, InputDoble, FormInput } from '../Dependencies.js';
import { NavegarProps } from '../../../types.js';
import { ComputerAddState } from "./Computertypes.js";
import useGet from '../../utils/CustomHooks/useGet.js';
import usePost from '../../utils/CustomHooks/usePost.js';

export default function ComputerAdd ({ Navegar }: NavegarProps) {

  const [idEquipo, setIdEquipo] = useState<ComputerAddState["equipo_Id"]>("");
  const [ram, setRam] = useState<ComputerAddState["ram"]>("");
  const [discoDuro, setDiscoDuro] = useState<ComputerAddState["disco_duro"]>("");
  const [procesador, setProcesador] = useState<ComputerAddState["procesador"]>("");
  const [ventilador, setVentilador] = useState<ComputerAddState["ventilador"]>("");
  const [fuentePoder, setFuentePoder] = useState<ComputerAddState["fuentePoder"]>("");
  const [motherBoard, setMotherBoard] = useState<ComputerAddState["motherBoard"]>("");
  const [tipoMotherBoard, setTipoMotherBoard] = useState<ComputerAddState["tipo_MotherBoard"]>("");
  const [search, setSearch] = useState("");

  const {dispositivos} = useGet({url: `/dispositivos/all/search?search=${search}`})
  const { msg, agregarDatos } = usePost("computer");

  const handleChangeSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
  };

  const handleAgregarDatos = async () => {
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
    agregarDatos(postData)
  }

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
          <input type="text" value={search} onChange={handleChangeSearch} />
          <br />
          <select value={idEquipo} onChange={handleDispositivoChange} className="SelectData">
            <option>ID, dato buscado</option>
            {dispositivos.map((dispositivo: any) => {
              if (dispositivo.nombre_equipo === "CPU" || dispositivo.nombre_equipo === "Laptop") {
                return <option key={dispositivo.id} value={dispositivo.id}>{dispositivo.id}, {search}</option>;
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
      <BtnAction btnlabel="Guardar" btncolor="success" action={handleAgregarDatos} />
      </Form>

      { msg && <span style={{color: "red"}}>{msg}</span> }
    </>
  );
};