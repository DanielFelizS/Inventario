import { DeleteComputer } from "../../Page";
import useDelete from "../../../utils/CustomHooks/useDelete";

export const EliminarComputer = () => {
  
  const {eliminarDatos, NavigateHome} = useDelete("computer")

  return (
    <>
      <DeleteComputer Delete={eliminarDatos} Navegar={NavigateHome} />
    </>
  );
};

export default EliminarComputer;