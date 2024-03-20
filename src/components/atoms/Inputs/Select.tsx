import Form from "react-bootstrap/Form";
import { SelectDepartamento } from "../../../types";

export const Select = ({
  ValueID,
  DepartamentoChange,
  Departamento,
}: SelectDepartamento) => {
  return (
    <Form.Select value={ValueID} onChange={DepartamentoChange}>
      {Departamento.map((departamento: any) => (
        <option key={departamento.id} value={departamento.id}>
          {departamento.nombre}
        </option>
      ))}
    </Form.Select>
  );
};

export default Select;
