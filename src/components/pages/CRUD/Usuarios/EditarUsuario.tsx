import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserEdit from "../../../templates/Usuario/FormEditar";
import { useNavigate } from "react-router-dom";

export const EditarUsuario = () => {
  const [error] = useState<string>("");

  const navigate = useNavigate();
  const NavigateHome = () => {
    navigate("/Usuarios");
  }

  return (
    <>
      <UserEdit btnCerrar={NavigateHome} />
      {error && <p className="text-danger">{error}</p>}
    </>
  );
};

export default EditarUsuario;