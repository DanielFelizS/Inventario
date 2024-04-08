import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { InputTextProps } from "../../../types";

export const FormInput = ({
  InputTitle,
  InputType,
  InputPlaceholder,
  InputName,
  Inputvalue,
  InputChange,
}: InputTextProps) => {
  return (
    <>
      <Form.Label>{InputTitle}</Form.Label>
      <Form.Control
        type={InputType}
        placeholder={InputPlaceholder}
        name={InputName}
        value={Inputvalue}
        onChange={InputChange}
      />
    </>
  );
};

export default FormInput;