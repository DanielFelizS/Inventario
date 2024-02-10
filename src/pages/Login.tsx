import { useState } from "react";
import FormInput from "../atoms/Inputs/InputText";
import BtnAction from "../atoms/Buttons/Button";
import SelectForm from "../atoms/Inputs/InputEstado";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LoginAction } from "../components/LoginAction";
import { LoginData } from "../types";

export const Login = () => {
  const [username, setUsername] = useState<LoginData["username"]>("");
  const [password, setPassword] = useState<LoginData["password"]>("");
  const [userRol, setUserRol] = useState<LoginData["userRol"]>("");
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await LoginAction({
        username,
        password,
        userRol,
      });

      if (response && response.token) {
        localStorage.setItem("token", response.token);
        console.log(response);
        setUser(response.username);
        setUsername("");
        setPassword("");
        setUserRol("");
        navigate("/Inicio");
      } else {
        alert("Error: No se recibió el token JWT en la respuesta");
      }
    } catch (error) {
      alert(`Error: ${error}`);
    }
  };

  return (
    <Form>
      <FormInput
        InputTitle="Nombre de usuario"
        InputType="text"
        InputName="username"
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
      <SelectForm
        Inputvalue={userRol}
        InputChange={(e) => setUserRol(e.target.value)}
        InputName='Rol'
        Select1='admin'
        Select2='Soporte técnico'
        Select3='Lector'
      />
      <br />
      <BtnAction
        btnlabel="Iniciar Sesión"
        btncolor="primary"
        action={handleLogin}
      />
    </Form>
  );
};

export default Login;
