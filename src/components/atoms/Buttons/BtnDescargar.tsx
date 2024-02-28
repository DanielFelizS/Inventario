import { IoMdDownload } from "react-icons/io";
declare module 'react-csv';
import { CSVLink } from "react-csv";
import { btnDescargarProps } from "../../../types";

const BtnDescargar = ({ DownloadData }: btnDescargarProps) => {

  return (
    <CSVLink data={DownloadData} separator={";"} filename="Inventario.csv" >
        <button>
    <IoMdDownload /> Exportar .csv
    </button>
</CSVLink>
  );
};

export default BtnDescargar;