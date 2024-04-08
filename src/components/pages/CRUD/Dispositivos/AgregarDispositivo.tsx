import "bootstrap/dist/css/bootstrap.min.css";
import DevicesAdd from "../../../templates/Dispositivos/FormAgregar";
import { useNavigate } from "react-router-dom";

const AgregarDispositivo = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/Dispositivo");
  }

  return (
    <>
    <DevicesAdd Navegar={handleNavigate}/>
    </>
  );
};

export default AgregarDispositivo;
