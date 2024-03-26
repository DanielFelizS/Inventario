import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { SelectFormProps } from "../../../types";

export const SelectForm = ({
  Inputvalue,
  InputChange,
  InputName,
  Select1,
  Select2,
  Select3,
  Select4
}: SelectFormProps) => {
  return (
    <>
      <Form.Label>{InputName}</Form.Label>
      <Form.Control
        as="select"
        name={InputName}
        value={Inputvalue}
        onChange={InputChange}
      >
        <option disabled>Escoge una opción</option>
        <option value={Select1}>{Select1}</option>
        <option value={Select2}>{Select2}</option>
        <option value={Select3}>{Select3}</option>
        <option value={Select4}>{Select4}</option>
      </Form.Control>
    </>
  );
};

export default SelectForm;
