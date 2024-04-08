import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DevicesEdit from "../../../templates/Dispositivos/FormEditar";
import { useNavigate } from "react-router-dom";

export const EditarDispositivo = () => {
  const [error] = useState<string>("");

  const navigate = useNavigate();
  const NavigateHome = () => {
    navigate("/Dispositivo");
  }

  return (
    <>
      <DevicesEdit btnCerrar={NavigateHome} />
      {error && <p className="text-danger">{error}</p>}
    </>
  );
};

export default EditarDispositivo;