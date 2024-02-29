import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import api from "../../axiosData.mjs";
import { useNavigate, useParams } from "react-router-dom";
import DeleteComputer from "../molecules/DeletePc";

export const EliminarComputer = () => {
  const [data, setData] = useState<any>("");

  const navigate = useNavigate();
  const NavigateHome = () => {
    navigate("/Computer");
  };

  const { id } = useParams();

  const eliminarDatos = async () => {
    const response = await api.delete(`/computer/${id}`, data);
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
      <DeleteComputer Delete={eliminarDatos} Navegar={NavigateHome} />
    </>
  );
};

export default EliminarComputer;