import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BtnAction from "../../atoms/Buttons/Button";
import Paragraph from "../../atoms/others/Paragraph";
import { DeleteModalProps } from "./types";

export const DeleteDepartamento = ({ Navegar, Delete }: DeleteModalProps) => {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton onClick={Navegar}>
          <Modal.Title>Datos del equipo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Paragraph
            TextParagraph="Id del departamento: "
            ValueParagraph="id"
            APIUrl={"departamentos"}
          />
          <Paragraph
            TextParagraph="Nombre del departamento: "
            ValueParagraph="nombre"
            APIUrl={"departamentos"}
          />
          <Paragraph
            TextParagraph="Descripción (Objetivo del departamento): "
            ValueParagraph="descripción"
            APIUrl={"departamentos"}
          />
          <Paragraph
            TextParagraph="Fecha de creación: "
            ValueParagraph="fecha_creacion"
            APIUrl={"departamentos"}
          />
          <Paragraph
            TextParagraph="Encargado del departamento: "
            ValueParagraph="encargado"
            APIUrl={"departamentos"}
          />
        </Modal.Body>
        <Modal.Footer>
          <BtnAction btncolor="primary" action={Navegar} btnlabel="Cerrar" />
          <BtnAction btncolor="danger" action={Delete} btnlabel="Eliminar" />
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default DeleteDepartamento;
