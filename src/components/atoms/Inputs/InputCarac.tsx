import "bootstrap/dist/css/bootstrap.min.css";
import { Form, InputGroup } from "react-bootstrap";
import { InputDobleProps } from "../../../types";
export const InputDoble = ({
  InputName,
  FirstValue,
  FirstChange,
  FirstType,
  FirstPlaceholder,
  FirstName,
  SecondValue,
  SecondChange,
  SecondType,
  SecondPlaceholder,
  SecondName,
}: InputDobleProps) => {
  return (
    <>
      <Form.Label>{InputName}</Form.Label>
      <InputGroup className="mb-3">
        <Form.Control
          type={FirstType}
          placeholder={FirstPlaceholder}
          name={FirstName}
          value={FirstValue}
          onChange={FirstChange}
        />
        <Form.Control
          type={SecondType}
          placeholder={SecondPlaceholder}
          name={SecondName}
          value={SecondValue}
          onChange={SecondChange}
        />
      </InputGroup>
    </>
  );
};

export default InputDoble;