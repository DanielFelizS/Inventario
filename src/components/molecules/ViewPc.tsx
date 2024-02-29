import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BtnAction from "../atoms/Buttons/Button";
import Paragraph from "../atoms/others/Paragraph";
import { NavegarProps } from "../../types";

export const ViewComputer = ({ Navegar }: NavegarProps) => {

  return (
    <div className="modal show" style={{ display: "block", position: "initial" }}>
      <Modal.Dialog>
        <Modal.Header closeButton  onClick={Navegar}> 
          <Modal.Title>Características del pc</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Paragraph TextParagraph='Id del PC: ' ValueParagraph='id' APIUrl={'computer'}/>
          <Paragraph TextParagraph='Id del Dispositivo: ' ValueParagraph='equipo_Id' APIUrl={'computer'}/>
          <Paragraph TextParagraph='Memoria Ram: ' ValueParagraph='ram' APIUrl={'computer'}/>
          <Paragraph TextParagraph='Disco Duro: ' ValueParagraph='disco_duro' APIUrl={'computer'}/>
          <Paragraph TextParagraph='Procesador:  ' ValueParagraph='procesador' APIUrl={'computer'}/>
          <Paragraph TextParagraph='Ventilador: ' ValueParagraph='ventilador' APIUrl={'computer'}/>
          <Paragraph TextParagraph='Fuente de poder: ' ValueParagraph='fuentePoder' APIUrl={'computer'}/>
          <Paragraph TextParagraph='Motherboard: ' ValueParagraph='motherBoard' APIUrl={'computer'}/>
          <Paragraph TextParagraph='Tipo de la Motherboard: ' ValueParagraph='tipo_MotherBoard' APIUrl={'computer'}/>
      </Modal.Body>
      <Modal.Footer>
        <BtnAction btncolor="danger" action={Navegar} btnlabel="Cerrar"/>
      </Modal.Footer>
    </Modal.Dialog>
  </div>
  )
}

export default ViewComputer;