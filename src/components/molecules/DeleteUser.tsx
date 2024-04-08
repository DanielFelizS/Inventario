import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BtnAction from "../atoms/Buttons/Button";
import Paragraph from "../atoms/others/Paragraph";
import { DeleteModalProps } from "./MoleculesTypes";

export const DeleteUser = ({ Navegar, Delete }: DeleteModalProps) => {


  return (
    <div className="modal show"
    style={{ display: "block", position: "initial" }}>
     <Modal.Dialog>
      <Modal.Header closeButton  onClick={Navegar}> 
        <Modal.Title>Datos del equipo</Modal.Title>
       </Modal.Header>
       <Modal.Body>
        <Paragraph TextParagraph='Id del usuario: ' ValueParagraph='id' APIUrl={'usuarios'}/>
        <Paragraph TextParagraph='Nombre: ' ValueParagraph='firstName' APIUrl={'usuarios'}/>
        <Paragraph TextParagraph='Apellido: ' ValueParagraph='lastName' APIUrl={'usuarios'}/>
        <Paragraph TextParagraph='Nombre de usuario: ' ValueParagraph='userName' APIUrl={'usuarios'}/>
        <Paragraph TextParagraph='Email: ' ValueParagraph='email' APIUrl={'usuarios'}/>
       </Modal.Body>
       <Modal.Footer>
        <BtnAction btncolor="primary" action={Navegar} btnlabel="Cerrar"/>
        <BtnAction btncolor="danger" action={Delete} btnlabel="Eliminar"/>
     </Modal.Footer>
    </Modal.Dialog>
  </div>
  )
}

export default DeleteUser;