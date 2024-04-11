import { useState, useEffect } from "react";
import api from "../../../axiosData.mts";

export default function useGet( { url }: any) {
    const [departamentos, setDepartamentos] = useState<any>([]);
    const [dispositivos, setDispositivos] = useState<any>([]);

    useEffect(() => {
        obtenerDatos();
      }, [url]);
    
      const obtenerDatos = async () => {
        try {
          const response = await api.get(url);
            setDispositivos(response.data);
            setDepartamentos(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  return {
    departamentos,
    dispositivos,
    
  }
}