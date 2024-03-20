import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { btnProps } from "../../../types";

export const BtnAction = ({ action, btnlabel, btncolor }: btnProps) => {
  return (
    <Button variant={btncolor} onClick={action} style={{margin: "2px"}}>
      {btnlabel}
    </Button>
  )
}

export default BtnAction;