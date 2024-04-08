import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import api from "../../../../axiosData.mjs";
import { useNavigate, useParams } from "react-router-dom";
import DeleteDepartamento from "../../../molecules/DeleteDepartamento";

export const EliminarDepartamento = () => {
  const [data, setData] = useState<any>("");

  const navigate = useNavigate();
  const NavigateHome = () => {
    navigate("/Departamentos");
  };

  const { id } = useParams();

  const eliminarDatos = async () => {
    const response = await api.delete(`/departamento/${id}`, data);
    if (response.status === 200) { 
      setData("");
      alert("Se ha eliminado el dispositivo correctamente");
      NavigateHome();
    } 
    else if(response.status == 401) alert(`Usuario no autorizado`)
    else alert(`Error al eliminar el dispositivo: ${response}`);
    

  };

  return (
    <>
      <DeleteDepartamento Delete={eliminarDatos} Navegar={NavigateHome} />
    </>
  );
};

export default EliminarDepartamento;