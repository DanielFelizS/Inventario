import Table from '../organisms/Table';
import BtnAction from "../atoms/Buttons/Button"
// import DataPagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/Agregar");
  };

  return (
    <>
      <BtnAction btncolor='success' action={handleNavigate} btnlabel='AgregarDatos'/> 
      {/* <br /> */}
      <Table/>
      {/* <DataPagination/> */}
    </>
  )
}

export default HomePage;