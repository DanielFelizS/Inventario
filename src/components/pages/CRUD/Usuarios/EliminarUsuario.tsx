import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import api from "../../../../axiosData.mjs";
import { useNavigate, useParams } from "react-router-dom";
import DeleteUser from "../../../molecules/DeleteUser";
export const EliminarUsuario = () => {
  const [data, setData] = useState<any>("");

  const navigate = useNavigate();
  const NavigateHome = () => {
    navigate("/Usuarios");
  };

  const { id } = useParams();

  const eliminarDatos = async () => {
    const response = await api.delete(`/usuarios/${id}`, data);
    if (response.status === 200) { 
      setData("");
      alert("Se ha eliminado el usuario correctamente");
      NavigateHome();
    } 
    else if(response.status == 401) alert(`Usuario no autorizado`)
    else alert(`Error al eliminar el usuario: ${response}`);
    

  };

  return (
    <>
      <DeleteUser Delete={eliminarDatos} Navegar={NavigateHome} />
    </>
  );
};

export default EliminarUsuario;