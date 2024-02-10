/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BtnAction from "../atoms/Buttons/Button";
import Paragraph from "../atoms/others/Paragraph";
import { NavegarProps } from "../types";

export const ViewModal = ({ Navegar }: NavegarProps) => {

  return (
    <div className="modal show" style={{ display: "block", position: "initial" }}>
      <Modal.Dialog>
        <Modal.Header closeButton  onClick={Navegar}> 
          <Modal.Title>Datos del equipo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Paragraph TextParagraph='Id del equipo: ' ValueParagraph='id'/>
          <Paragraph TextParagraph='Nombre del equipo: ' ValueParagraph='nombre_equipo'/>
          <Paragraph TextParagraph='Marca: ' ValueParagraph='marca'/>
          <Paragraph TextParagraph='Modelo: ' ValueParagraph='modelo'/>
          <Paragraph TextParagraph='Número de serie (Service Tag): ' ValueParagraph='serial_no'/>
          <Paragraph TextParagraph='Inventario: ' ValueParagraph='cod_inventario'/>
          <Paragraph TextParagraph='Bienes Nacionales: ' ValueParagraph='bienes_nacionales'/>
          <Paragraph TextParagraph='Estado del equipo: ' ValueParagraph='estado'/>
          <Paragraph TextParagraph='Propietario del equipo: ' ValueParagraph='propietario_equipo'/>
          <Paragraph TextParagraph='Fecha de modificación: ' ValueParagraph='fecha_modificacion'/>
      </Modal.Body>
      <Modal.Footer>
        <BtnAction btncolor="danger" action={Navegar} btnlabel="Cerrar"/>
      </Modal.Footer>
    </Modal.Dialog>
  </div>
  )
}

export default ViewModal