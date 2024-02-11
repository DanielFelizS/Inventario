/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import api from "../../axiosData.mjs";
import { useParams } from "react-router-dom";
import { ParagraphProps } from "../../types";

const Paragraph = ({TextParagraph, ValueParagraph}: ParagraphProps) => {
    const [data, setData] = useState<string>("");

    const { id } = useParams();

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    try {
      const response = await api.get(`/dispositivos/${id}`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
        <p><strong>{TextParagraph}</strong> {data[ValueParagraph]}</p>
    </>
  )
}

export default Paragraph;