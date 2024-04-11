import useDelete from "../../../utils/CustomHooks/useDelete";
import DeleteModal from "../../../molecules/modal/DeleteModal";

export const EliminarDispositvo = () => {

  const {eliminarDatos, NavigateHome} = useDelete("dispositivos")

  return (
    <>
      <DeleteModal Delete={eliminarDatos} Navegar={NavigateHome} />
    </>
  );
};

export default EliminarDispositvo;