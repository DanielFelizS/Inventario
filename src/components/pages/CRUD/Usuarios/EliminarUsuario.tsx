import useDelete from "../../../utils/CustomHooks/useDelete";
import DeleteUser from "../../../molecules/modal/DeleteUser";
export const EliminarUsuario = () => {

  const {eliminarDatos, NavigateHome} = useDelete("departamentos");

  return (
    <>
      <DeleteUser Delete={eliminarDatos} Navegar={NavigateHome} />
    </>
  );
};

export default EliminarUsuario;