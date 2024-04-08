import { ComputerAdd, useNavigate } from "../../Page";

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
