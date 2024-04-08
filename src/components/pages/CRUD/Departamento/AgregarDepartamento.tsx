import "bootstrap/dist/css/bootstrap.min.css";
import DepartmentAdd from "../../../templates/Departamento/FormAgregar";
import { useNavigate } from "react-router-dom";

const AgregarDepartamento = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/Departamentos");
  }

  return (
    <>
    <DepartmentAdd Navegar={handleNavigate}/>
    </>
  );
};

export default AgregarDepartamento;
