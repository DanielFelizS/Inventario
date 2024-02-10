import { useState, useEffect } from "react";
import api from "../axiosData.mjs";
import { FormEditState } from "../types";
// import BtnDescargar from "../atoms/Buttons/BtnDescargar.jsx";
import Pagination from "../molecules/Pagination.jsx";
import Search from "../molecules/Search.js";
import InputBusqueda from "../atoms/Inputs/InputBusqueda.js";
import TableHead from "../atoms/table/TableHead.js";

export const Table = () => {
  const [data, setData] = useState<FormEditState[]>([]);
  const [load, setLoad] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [search, setSearch] = useState("");

  let limit = 6;

  const fetchData = async () => {
    try {
      const response = await api.get(
        `/dispositivos?pageNumber=${currentPage}&pageSize=${limit}`
      );
      const { data, headers } = response;
      const total = headers["x-total-count"];
      setPageCount(Math.ceil(total / limit));
      setData(data.items as FormEditState[]);
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
            <TableHead/>
            <Search DataFilter={data} Search={search}/>
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