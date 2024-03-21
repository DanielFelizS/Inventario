import { useState } from "react";
import FormInput from "../atoms/Inputs/InputText";
import BtnAction from "../atoms/Buttons/Button";
import { Form, Modal } from "react-bootstrap";
import { useNavigate, NavLink } from "react-router-dom";
import { LoginAction } from "../LoginAction";
import { LoginData } from "../../types";

export const Login = () => {
  const [username, setUsername] = useState<LoginData["userName"]>("");
  const [password, setPassword] = useState<LoginData["password"]>("");
  const [user, setUser] = useState("");

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
        navigate("/Dispositivo");
      } else {
        alert("Error: No se recibió el token JWT en la respuesta");
      }
    } catch (error) {
      alert(`Error: ${error}`);
    }
  };

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
