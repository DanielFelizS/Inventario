/* eslint-disable react/prop-types */
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormEdit from "../molecules/Forms/FormEditar.jsx";
import ObtenerDatos from "../components/ObtenerDatos";
import { useNavigate } from "react-router-dom";

export const EditarDispositivo = () => {
  const [error] = useState<string>("");

  <ObtenerDatos />

  const navigate = useNavigate();
  const NavigateHome = () => {
    navigate("/Inicio");
  }

  return (
    <>
      <FormEdit btnCerrar={NavigateHome} />
      {error && <p className="text-danger">{error}</p>}
    </>
  );
};

export default EditarDispositivo;