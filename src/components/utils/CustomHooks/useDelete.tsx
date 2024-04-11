import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../axiosData.mts";

export default function useDelete(url: string) {

  const [data, setData] = useState<any>("");
  const { id } = useParams();
  
  const navigate = useNavigate();
  const NavigateHome = () => {
    navigate(`/${url}`);
  };

  const eliminarDatos = async () => {
    const response = await api.delete(`/${url}/${id}`, data);
    if (response.status === 200) { 
      setData("");
      alert("Se ha eliminado el dispositivo correctamente");
      NavigateHome();
    } 
    else if(response.status == 401) alert(`Usuario no autorizado`)
    else alert(`Error al eliminar el dispositivo: ${response}`);
  };

  return {
    eliminarDatos,
    NavigateHome
  }
}
