import { useState, useEffect } from "react";
import FormInput from "../../atoms/Inputs/InputText";
import BtnAction from "../../atoms/Buttons/Button";
import { Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LoginAction } from "../../LoginAction";
import { LoginData } from "./Usertypes";
import api from "../../../axiosData.mts";


export const Login = () => {

  const [username, setUsername] = useState<LoginData["userName"]>("");
  const [password, setPassword] = useState<LoginData["password"]>("");
  const [dataRoles, setDataRoles] = useState<LoginData["dataRoles"]>([]);
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await LoginAction({
        username,
        password,
      });
      const token = response.message;

      if (response && token) {
        localStorage.setItem("token", token);
        // console.log(response);
        setUser(response.username);
        setUsername("");
        setPassword("");
        navigate("/Inicio");
      } else {
        setError("No se recibió el token JWT en la respuesta");
      }
    } catch (error) {
      setError("Usuario o contraseña incorrecto");
      console.log(error);
    }
  };

  const GetRoles = async () => {
    const Data = {
      userName: "",
    };
    const SendRoles = await api.post("/usuarios/seed-roles", Data);
    setDataRoles([...dataRoles, SendRoles.data]);
    // console.log("Roles activados");
  };

  useEffect(() => {
    GetRoles();
  }, []);

  return (
    <div className="modal show login">
      <Modal.Dialog className="Login-Cont">
        <h1 id="Titulo-Login">Iniciar Sesión</h1>

        <Modal.Body>
          <Form className="Login-Form">
            <FormInput
              InputTitle="Nombre de usuario"
              InputType="text"
              InputName="userName"
              Inputvalue={username}
              InputChange={(e) => setUsername(e.target.value)}
            />
            <FormInput
              InputTitle="Contraseña"
              InputType="password"
              InputName="password"
              Inputvalue={password}
              InputChange={(e) => setPassword(e.target.value)}
            />
            { error && <span style={{color: "red"}}>{error}</span> }
            <br />
            <div style={{ textAlign: "center" }} className="Btn-Login">
              <BtnAction
                btnlabel="Iniciar Sesión"
                btncolor="success"
                action={handleLogin}
              />
            </div>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default Login;
