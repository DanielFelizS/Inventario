import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BtnAction from "../atoms/Buttons/Button";
import Paragraph from "../atoms/others/Paragraph";
import { DeleteModalProps } from "./MoleculesTypes";


export const DeleteComputer = ({ Navegar, Delete }: DeleteModalProps) => {


  return (
    <div className="modal show"
    style={{ display: "block", position: "initial" }}>
     <Modal.Dialog>
      <Modal.Header closeButton  onClick={Navegar}> 
        <Modal.Title>Datos del equipo</Modal.Title>
       </Modal.Header>
       <Modal.Body>
        <Paragraph TextParagraph='Id del PC: ' ValueParagraph='id' APIUrl={'computer'}/>
        <Paragraph TextParagraph='Equipo: ' ValueParagraph='nombre_equipo' APIUrl={'computer'}/>
        <Paragraph TextParagraph='Memoria Ram: ' ValueParagraph='ram' APIUrl={'computer'}/>
        <Paragraph TextParagraph='Disco Duro: ' ValueParagraph='disco_duro' APIUrl={'computer'}/>
        <Paragraph TextParagraph='Procesador:  ' ValueParagraph='procesador' APIUrl={'computer'}/>
        <Paragraph TextParagraph='Ventilador: ' ValueParagraph='ventilador' APIUrl={'computer'}/>
        <Paragraph TextParagraph='Fuente de poder: ' ValueParagraph='fuentePoder' APIUrl={'computer'}/>
        <Paragraph TextParagraph='Motherboard: ' ValueParagraph='motherBoard' APIUrl={'computer'}/>
        <Paragraph TextParagraph='Tipo de la Motherboard: ' ValueParagraph='tipo_MotherBoard' APIUrl={'computer'}/>
       </Modal.Body>
       <Modal.Footer>
        <BtnAction btncolor="primary" action={Navegar} btnlabel="Cerrar"/>
        <BtnAction btncolor="danger" action={Delete} btnlabel="Eliminar"/>
     </Modal.Footer>
    </Modal.Dialog>
  </div>
  )
}

export default DeleteComputer;