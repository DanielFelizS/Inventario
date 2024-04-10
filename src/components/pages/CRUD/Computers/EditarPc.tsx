import { ComputerEdit, useNavigate, useState } from "../../Page";

export const EditarComputer = () => {
  const [error] = useState<string>("");

  const navigate = useNavigate();
  const NavigateHome = () => {
    navigate("/computer");
  }

  return (
    <>
      <ComputerEdit btnCerrar={NavigateHome} />
      {error && <p className="text-danger">{error}</p>}
    </>
  );
};

export default EditarComputer;