import {
  useState, useEffect,
  Form, BtnAction, InputDoble,
  FormInput, api,useNavigate, useParams } from '../Dependencies.js';
import { ComputerEditState } from "./Computertypes.js";
import { CerrarProps } from "../../../types.js";

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
  const [dispositivos, setDispositivos] = useState<any>([]);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const handleChangeSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    try {
      const response = await api.get(
        `/dispositivos/all/search?search=${value}`
      );
      if (Array.isArray(response.data)) {
        setDispositivos(response.data);
      } else {
        setError("Los datos no son una lista (arrays)");
        console.error(
          "Error: la respuesta de la API no contiene un array",
          response.data
        );
      }
    } catch (error) {
      setError("No se pudieron obtener los datos de los dispositivos");
      console.error(error);
    }
  };
  const obtenerBusqueda = async () => {
    try {
      const response = await api.get(
        `/dispositivos/all/search?search=${search}`
      );
      if (Array.isArray(response.data)) {
        setDispositivos(response.data);
      } else {
        setError("Los datos no son una lista (arrays)");
        console.error(
          "Error: la respuesta de la API no contiene un array",
          response.data
        );
      }
    } catch (error) {
      setError("No se pudieron obtener los datos de los dispositivos");
      console.error(error);
    }
  };

  const obtenerDispositivos = async () => {
    try {
      const request = await api.get(`/dispositivos/all`);
      if (Array.isArray(request.data)) {
        setDispositivos(request.data);
      } else {
        setError("Los datos no son una lista (arrays)");
        console.error(error);
      }
    } catch (error) {
      setError("No se pudieron obtener los datos de los dispositivos");
      console.error(error);
    }
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

  const editarDatos = async () => {
    try {
      if (!edit.id) {
        setError("El ID de la computadora es requerida");
        console.log(error);
      }

      const response = await api.put(`/computer/${edit.id}`, edit);
      alert(response.data);
      btnCerrar();
      navigate("/Computer");
    } catch (error) {
      setError("Ocurrió un error al editar la computadora");
      console.log(error);
    }
  };

  const { id } = useParams();
  const navigate = useNavigate();

  // Función para manejar cuando el usuario selecciona un departamento
  const handleDispositivoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setEdit((prevState) => ({
      ...prevState,
      equipo_Id: id,
    }));
  };
  useEffect(() => {
    obtenerDispositivos();
    obtenerBusqueda();
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

      {error && <span style={{ color: "red" }}>{error}</span>}
    </>
  );
};

export default ComputerEdit;
