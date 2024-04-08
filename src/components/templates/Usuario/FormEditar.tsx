import {
  useState, useEffect,
  Form, BtnAction,
  FormInput, api,useNavigate, useParams } from '../Dependencies.js';
import { CerrarProps } from "../../../types.js";
import { UserEditState } from "./UserTypes.js";

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
      setError("No se pudo obtener los datos del usuario");
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
      }

      const response = await api.put(`/usuarios/${edit.id}`, edit);
      // console.log(response.data);
      alert(response.data);
      btnCerrar();
      navigate("/Usuarios");
    }
    catch (error) {
      setError("Ocurrió un error al editar el usuario");
      console.error(error);
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
      
      { error && <span style={{color: "red"}}>{error}</span> }
    </>
  );
};

export default UserEdit;