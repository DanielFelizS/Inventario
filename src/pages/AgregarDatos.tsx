import "bootstrap/dist/css/bootstrap.min.css";
import FormAdd from "../molecules/Forms/FormAgregar";
import { useNavigate } from "react-router-dom";

const AgregarDispositivo = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/Inicio");
  }

  return (
    <>
    <FormAdd Navegar={handleNavigate}/>
    </>
  );
};

export default AgregarDispositivo;
