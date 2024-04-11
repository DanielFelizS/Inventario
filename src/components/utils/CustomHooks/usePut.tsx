import { useState } from "react";
import api from "../../../axiosData.mts";
import { useNavigate } from "react-router-dom";

export default function usePut({ PropEdit, url }: any) {
    const [msg, setMsg] = useState("");

    const navigate = useNavigate();
    const handleNavigate = () => {
      navigate(`/${url}`);
    };

    const editarDatos = async () => {
        try {
          if (!PropEdit.id) {
            setMsg("El ID del dispositivo es requerido");
          }
    
          const response = await api.put(`/${url}/${PropEdit.id}`, PropEdit);
          alert(response.data);
          handleNavigate();
        } catch (error) {
            setMsg("Ocurrió un error al editar el dispositivo");
            console.error(error);
        }
      };

  return {
    msg,
    editarDatos
  }
}
