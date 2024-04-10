import BtnAction from "../../atoms/Buttons/Button";
import { MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { TableHeadProps } from "./types";

export const TableButtons = ({ DataNavigate, EditarProp, EliminarProp }: TableHeadProps) => {

    const navigate = useNavigate();

    const NavigateEdit = (data: { id: string }) => {
      navigate(`/${EditarProp}/${data.id}`);
    };
    const NavigateDelete = (data: { id: string }) => {
      navigate(`/${EliminarProp}/${data.id}`);
    };

  return (
    <div id='TableActions'>
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
