import { useNavigate } from "react-router-dom";
import ViewComputer from "../molecules/ViewPc";

export const VerComputer = () => {

  const navigate = useNavigate();
  const NavigateHome = () => {
    navigate("/Computer");
  };

  return (
    <>
      <ViewComputer Navegar={NavigateHome}/>
    </>
  );
};

export default VerComputer;
