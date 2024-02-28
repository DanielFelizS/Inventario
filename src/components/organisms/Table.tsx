import { useState, useEffect } from "react";
import api from "../../axiosData.mjs";
// import BtnDescargar from "../atoms/Buttons/BtnDescargar.jsx";
import Pagination from "../molecules/Pagination.jsx";
import Search from "../molecules/Search.js";
import InputBusqueda from "../atoms/Inputs/InputBusqueda.js";
import TableHead from "../atoms/table/TableHead.js";
// import VerDatos from "../pages/VerDatos.js";
// import EliminarDatos from "../pages/EliminarDatos.js";

export interface PropsTable {
  APIPath: string
  APINames: string[]
  EditarDatos: string
  VerDatos: string
  EliminarDatos: string
}

export const Table = ({ APIPath, APINames, EditarDatos, VerDatos, EliminarDatos }: PropsTable) => {

  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [search, setSearch] = useState("");

  let limit = 6;

  const fetchData = async () => {
    try {
      const response = await api.get(
        `/${APIPath}?pageNumber=${currentPage}&pageSize=${limit}`
      );
      const { data, headers } = response;
      const total = headers["x-total-count"];
      setPageCount(Math.ceil(total / limit));
      setData(data.items);
      // console.log(data.items); 
      setLoad(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected + 1);
  };

  return (
    <>
      {load ? (
        <>
          <InputBusqueda EventSearch={(e)=> setSearch(e.target.value)}/>

          <table style={{ textAlign: "center" }}>
            <TableHead HeadPath={APIPath}/>
            <Search DataFilter={data} Search={search} columnNames={APINames} EditarPath={EditarDatos} VerPath={VerDatos} EliminarPath={EliminarDatos}/>
          </table>
        </>
      ) : (
        <h2>Consultando datos...</h2>
      )}
      <Pagination PageCount={pageCount} ActionPage={handlePageClick}/>
      {/* <BtnDescargar DownloadData={dataAll} /> */}
    </>
  );
};

export default Table;