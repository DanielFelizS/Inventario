import UserEdit from "../../../templates/Usuario/FormEditar";
import { useNavigate } from "react-router-dom";

export const EditarUsuario = () => {

  const navigate = useNavigate();
  const NavigateHome = () => {
    navigate("/usuarios");
  }

  return (
    <>
      <UserEdit btnCerrar={NavigateHome} />
    </>
  );
};

export default EditarUsuario;