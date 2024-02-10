import { useNavigate } from "react-router-dom";
import ViewModal from "../molecules/ViewModal";

export const VerDatos = () => {

  const navigate = useNavigate();
  const NavigateHome = () => {
    navigate("/Inicio");
  };

  return (
    <>
      <ViewModal Navegar={NavigateHome}/>
    </>
  );
};

export default VerDatos;
