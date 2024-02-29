import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ComputerEdit from "../templates/Computer/FormEditar";
import { useNavigate } from "react-router-dom";

export const EditarComputer = () => {
  const [error] = useState<string>("");

  const navigate = useNavigate();
  const NavigateHome = () => {
    navigate("/Computer");
  }

  return (
    <>
      <ComputerEdit btnCerrar={NavigateHome} />
      {error && <p className="text-danger">{error}</p>}
    </>
  );
};

export default EditarComputer;