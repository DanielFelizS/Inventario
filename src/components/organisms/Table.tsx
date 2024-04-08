import { useState, useEffect } from "react";
import api from "../../axiosData.mjs";
import Pagination from "../molecules/Pagination.jsx";
import Search from "../molecules/Search.js";
import TableHead from "../atoms/table/TableHead.js";
import { PropsTable } from "./TableTypes.js";
import DataSpinner from "../atoms/others/Spinner.js";

export const Table = ({ APIPath, APINames, EditarDatos, EliminarDatos, searchData, Header }: PropsTable) => {

  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const limit = 6;

  const fetchData = async () => {
    try {
      const response = await api.get(
        `/${APIPath}/search?pageNumber=${currentPage}&pageSize=${limit}&search=${searchData}`
      );
      const { data, headers } = response;
      const total = headers["x-total-count"];
      setPageCount(Math.ceil(total / limit));
      setData(data.items);
      setLoad(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, searchData]); 
  
  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected + 1);
  };

  return (
    <>
      {load ? (
        <>
          <table>
            <TableHead HeadPath={Header}/>

            <Search DataFilter={data} search={searchData} columnNames={APINames} EditarPath={EditarDatos} EliminarPath={EliminarDatos}/>
          </table>
        </>
      ) : (
        <DataSpinner/>
      )}
      <Pagination PageCount={pageCount} ActionPage={handlePageClick}/>
    </>
  );
};

export default Table;
