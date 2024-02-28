import { useNavigate } from "react-router-dom";
import ViewDepartamento from "../molecules/ViewDepartamento";

export const VerDepartamento = () => {

  const navigate = useNavigate();
  const NavigateHome = () => {
    navigate("/Departamentos");
  };

  return (
    <>
      <ViewDepartamento Navegar={NavigateHome}/>
    </>
  );
};

export default VerDepartamento;
