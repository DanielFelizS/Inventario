import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BtnAction from "../atoms/Buttons/Button";
import Paragraph from "../atoms/others/Paragraph";
import { DeleteModalProps } from "./MoleculesTypes";

export const DeleteModal = ({ Navegar, Delete }: DeleteModalProps) => {

  return (
    <div className="modal show"
    style={{ display: "block", position: "initial" }}>
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
        <Paragraph TextParagraph='Inventario: ' ValueParagraph='cod_inventario' APIUrl={'dispositivos'}/>
        <Paragraph TextParagraph='Bienes Nacionales: ' ValueParagraph='bienes_nacionales' APIUrl={'dispositivos'}/>
        <Paragraph TextParagraph='Estado del equipo: ' ValueParagraph='estado' APIUrl={'dispositivos'}/>
        <Paragraph TextParagraph='Propietario del equipo: ' ValueParagraph='propietario_equipo' APIUrl={'dispositivos'}/>
        <Paragraph TextParagraph='Fecha de modificación: ' ValueParagraph='fecha_modificacion' APIUrl={'dispositivos'}/>
        <Paragraph TextParagraph='Departamento: ' ValueParagraph='nombre_departamento' APIUrl={'dispositivos'}/>
       </Modal.Body>
       <Modal.Footer>
        <BtnAction btncolor="primary" action={Navegar} btnlabel="Cerrar"/>
        <BtnAction btncolor="danger" action={Delete} btnlabel="Eliminar"/>
     </Modal.Footer>
    </Modal.Dialog>
  </div>
  )
}

export default DeleteModal;