import "bootstrap/dist/css/bootstrap.min.css";
import ComputerAdd from "../templates/Computer/FormAgregar";
import { useNavigate } from "react-router-dom";

const AgregarComputer = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/Computer");
  }

  return (
    <>
    <ComputerAdd Navegar={handleNavigate}/>
    </>
  );
};

export default AgregarComputer;
