import BtnAction from "../../atoms/Buttons/Button";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const TableButtons = ({ DataNavigate, EditarProp, EliminarProp }: any) => {

    const navigate = useNavigate();

    const NavigateEdit = (data: { id: string }) => {
      navigate(`/${EditarProp}/${data.id}`);
    };
    // const NavigateVer = (data: { id: string }) => {
    //   navigate(`/${VerProp}/${data.id}`);
    // };
    const NavigateDelete = (data: { id: string }) => {
      navigate(`/${EliminarProp}/${data.id}`);
    };

  return (
    <div id='TableActions'>
      {/* <BtnAction
        btnlabel={<FaEye />}
        btncolor="outline-success"
        action={() => NavigateVer(DataNavigate)}
      /> */}
      <BtnAction
        btnlabel={<MdEdit />}
        btncolor="outline-warning"
        action={() => NavigateEdit(DataNavigate)}
      />
      <BtnAction
        btnlabel={<MdDelete />}
        btncolor="outline-danger"
        action={() => NavigateDelete(DataNavigate)}
      />
    </div>
  );
};

export default TableButtons;
