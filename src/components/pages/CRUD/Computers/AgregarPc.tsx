import { ComputerAdd, useNavigate } from "../../Page";

const AgregarComputer = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/computer");
  }

  return (
    <>
    <ComputerAdd Navegar={handleNavigate}/>
    </>
  );
};

export default AgregarComputer;
