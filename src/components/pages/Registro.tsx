import FormInput from "../atoms/Inputs/InputText";
import BtnAction from "../atoms/Buttons/Button";
import InputDoble from "../atoms/Inputs/InputCarac";
import { Form, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../axiosData.mts";

export default function Registro() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState<any>([]);
  const [dataRoles, setDataRoles] = useState<any>([]);

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const DataRegister = {
        firstName: firstName,
        lastName: lastName,
        userName: username,
        email: email,
        password: password,
      };
      const send = await api.post("/usuarios/registro", DataRegister);
      const sendData = send.data;
      if(sendData.isSucceed){
      setData([...data, sendData]);
      alert("El usuario ha sido registrado correctamente");
      navigate("/Dispositivo");
      }
      else{
        alert(sendData.message);
      }

    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  const GetRoles = async () => {
    const SendRoles = await api.post("/usuarios/seed-roles");
    setDataRoles([...dataRoles, SendRoles.data]);
    // console.log("Roles activados");
  }

  useEffect(() => {
    GetRoles();
  }, []);

  return (
    <div className="modal show login">
      <Modal.Dialog>
        {/* <Modal.Header closeButton  onClick={Navegar}> 
        <Modal.Title>Datos del equipo</Modal.Title>
      </Modal.Header> */}
        <Modal.Body>
          <Form>
            <InputDoble
              InputName="Nombre y apellido"
              FirstValue={firstName}
              FirstChange={(e) => setFirstName(e.target.value)}
              FirstType="text"
              FirstPlaceholder="Nombre"
              FirstName="firstName"
              SecondValue={lastName}
              SecondChange={(e) => setLastName(e.target.value)}
              SecondType="text"
              SecondPlaceholder="Apellido"
              SecondName="lastName"
            />
            <FormInput
              InputTitle="Nombre de usuario"
              InputType="text"
              InputName="userName"
              Inputvalue={username}
              InputChange={(e) => setUsername(e.target.value)}
            />
            <FormInput
              InputTitle="Correo Electrónico"
              InputType="email"
              InputName="email"
              Inputvalue={email}
              InputChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
              InputTitle="Contraseña"
              InputType="password"
              InputName="password"
              Inputvalue={password}
              InputChange={(e) => setPassword(e.target.value)}
            />
          </Form>
        </Modal.Body>
        <br />
        <Modal.Footer>
          <BtnAction
            btnlabel="Registrarse"
            btncolor="primary"
            action={handleRegister}
          />
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
