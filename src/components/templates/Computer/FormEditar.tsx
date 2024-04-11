import {
  useState, useEffect,
  Form, BtnAction, InputDoble,
  FormInput, api, useParams } from '../Dependencies.js';
import { ComputerEditState } from "./Computertypes.js";
import { CerrarProps } from "../../../types.js";
import useGet from '../../utils/CustomHooks/useGet.js';
import usePut from '../../utils/CustomHooks/usePut.js';

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
    tipo_MotherBoard: "",
  });
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const {dispositivos} = useGet({ url: `/dispositivos/all/search?search=${search}`})
  // const {dispositivos} = useGet({ url: `/dispositivos/all`})
  const {msg, editarDatos} = usePut({ url: `computer`, PropEdit: edit})
  
  const { id } = useParams();

  const handleChangeSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };


  const obtenerDatos = async () => {
    try {
      const response = await api.get(`/computer/${id}`);
      setEdit(response.data);
    } catch (error) {
      setError("No se pudieron obtener los datos de la computadora");
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


  // Función para manejar cuando el usuario selecciona un departamento
  const handleDispositivoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setEdit((prevState) => ({
      ...prevState,
      equipo_Id: id,
    }));
  };
  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <>
      <Form className="FormData">
        <Form.Group className="mb-3" controlId="">
          <label>Equipo</label>
          <br />
          <input type="text" value={search} onChange={handleChangeSearch} />
          <br />
          <select
            value={edit.equipo_Id}
            onChange={handleDispositivoChange}
            className="SelectData"
          >
            <option>ID, dato buscado</option>
            {dispositivos.map((dispositivo: any) => {
              if (
                dispositivo.nombre_equipo === "CPU" ||
                dispositivo.nombre_equipo === "Laptop"
              ) {
                return (
                  <option key={dispositivo.id} value={dispositivo.id}>
                    {dispositivo.id}, {search}
                  </option>
                );
              }
            })}
          </select>
          <br />
          <InputDoble
            InputName="RAM y Disco duro"
            FirstValue={edit.ram}
            FirstChange={handleInputChange}
            FirstType="text"
            FirstPlaceholder="32 GB"
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

      {msg && <span style={{ color: "green" }}>{msg}</span>}
      {error && <span style={{ color: "red" }}>{error}</span>}
    </>
  );
};

export default ComputerEdit;
