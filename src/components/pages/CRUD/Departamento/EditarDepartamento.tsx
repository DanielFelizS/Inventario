import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DepartmentEdit from "../../../templates/Departamento/FormEditar";
import { useNavigate } from "react-router-dom";

export const EditarDepartamento = () => {
  const [error] = useState<string>("");

  const navigate = useNavigate();
  const NavigateHome = () => {
    navigate("/Departamentos");
  }

  return (
    <>
      <DepartmentEdit btnCerrar={NavigateHome} />
      {error && <p className="text-danger">{error}</p>}
    </>
  );
};

export default EditarDepartamento;