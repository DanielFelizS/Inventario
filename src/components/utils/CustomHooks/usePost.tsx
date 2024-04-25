import { useState } from "react";
import api from "../../../axiosData.mts";
import { useNavigate } from "react-router-dom";

export default function usePost(url: string) {
    const [msg, setMsg] = useState("");
    const [data, setData] = useState<any[]>([]);

    const navigate = useNavigate();
    const handleNavigate = () => {
      navigate(`/${url}`);
    };

    const agregarDatos = async (postData: any) => {
        try {
            const response = await api.post(`/${url}`, postData);
            setData([...data, response.data]);
            setMsg(`Los datos se han agregado correctamente`);
            handleNavigate()
        } catch (error) {
            setMsg(`No se pudieron agregar los datos a la entidad ${url}`);
            console.error(error);
        }
    };

    return {
        msg,
        agregarDatos
    };
}
