import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormInput from "../Inputs/InputText";

function ModalUser({
  CloseModal,
  ModalShow,
  ModalTitle,
  RolChange,
  ModalValue,
  ModalChange
}: any) {
  return (
    <Modal show={ModalShow} onHide={CloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{ModalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormInput
          InputTitle="Nombre de usuario"
          InputType="text"
          InputName="userName"
          Inputvalue={ModalValue}
          InputChange={ModalChange}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={CloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={RolChange}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalUser;
