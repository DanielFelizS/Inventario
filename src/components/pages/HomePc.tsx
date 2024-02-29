import Table from '../organisms/Table';
import BtnAction from "../atoms/Buttons/Button"
import { useNavigate } from "react-router-dom";

export const HomeComputer = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/AgregarPc");
  };
  const Datos = ['id', 'equipo_Id', 'ram', 'disco_duro', 'procesador', 'ventilador', 'fuentePoder', 'motherBoard', 'tipo_MotherBoard'];

  return (
    <>
      <BtnAction btncolor='success' action={handleNavigate} btnlabel='AgregarDatos'/> 
      {/* <br /> */}
      <Table APIPath='computer' APINames={Datos} VerDatos={'VerPc'} EditarDatos={'EditarPc'} EliminarDatos={'EliminarPc'}/>
    </>
  )
}

export default HomeComputer;