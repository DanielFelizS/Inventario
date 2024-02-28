import { useNavigate } from "react-router-dom";
import ViewModal from "../molecules/ViewModal";

export const VerDispositivo = () => {

  const navigate = useNavigate();
  const NavigateHome = () => {
    navigate("/Dispositivo");
  };

  return (
    <>
      <ViewModal Navegar={NavigateHome}/>
    </>
  );
};

export default VerDispositivo;
