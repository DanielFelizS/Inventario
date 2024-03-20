import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BtnAction from "../atoms/Buttons/Button";
import Paragraph from "../atoms/others/Paragraph";
import { NavegarProps } from "../../types";

export const ViewModal = ({ Navegar }: NavegarProps) => {

  return (
    <div className="modal show" style={{ display: "block", position: "initial" }}>
      <Modal.Dialog>
        <Modal.Header closeButton  onClick={Navegar}> 
          <Modal.Title>Datos del equipo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Paragraph TextParagraph='Id del equipo: ' ValueParagraph='id' APIUrl={'dispositivos'}/>
          <Paragraph TextParagraph='Nombre del equipo: ' ValueParagraph='nombre_equipo' APIUrl={'dispositivos'}/>
          <Paragraph TextParagraph='Marca: ' ValueParagraph='marca' APIUrl={'dispositivos'}/>
          <Paragraph TextParagraph='Modelo: ' ValueParagraph='modelo' APIUrl={'dispositivos'}/>
          <Paragraph TextParagraph='Número de serie (Service Tag): ' ValueParagraph='serial_no' APIUrl={'dispositivos'}/>
          <Paragraph TextParagraph='Invi: ' ValueParagraph='cod_inventario' APIUrl={'dispositivos'}/>
          <Paragraph TextParagraph='Bienes nacionales: ' ValueParagraph='bienes_nacionales' APIUrl={'dispositivos'}/>
          <Paragraph TextParagraph='Estado del equipo: ' ValueParagraph='estado' APIUrl={'dispositivos'}/>
          <Paragraph TextParagraph='Propietario del equipo: ' ValueParagraph='propietario_equipo' APIUrl={'dispositivos'}/>
          <Paragraph TextParagraph='Fecha de modificación: ' ValueParagraph='fecha_modificacion' APIUrl={'dispositivos'}/>
          <Paragraph TextParagraph='Departamento: ' ValueParagraph='nombre_departamento' APIUrl={'dispositivos'}/>
      </Modal.Body>
      <Modal.Footer>
        <BtnAction btncolor="danger" action={Navegar} btnlabel="Cerrar"/>
      </Modal.Footer>
    </Modal.Dialog>
  </div>
  )
}

export default ViewModal