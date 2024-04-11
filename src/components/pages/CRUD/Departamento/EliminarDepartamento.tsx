import DeleteDepartamento from "../../../molecules/modal/DeleteDepartamento";
import useDelete from "../../../utils/CustomHooks/useDelete";

export const EliminarDepartamento = () => {

  const {eliminarDatos, NavigateHome} = useDelete("departamentos")

  return (
    <>
      <DeleteDepartamento Delete={eliminarDatos} Navegar={NavigateHome} />
    </>
  );
};

export default EliminarDepartamento;