import api from "./../axiosData.mjs";

export const LoginAction = async (credentials: any) => {
  try {
    const { data } = await api.post("/usuarios/login", credentials);
    return data;
  } catch (error) {
    throw new Error("Error en la solicitud de inicio de sesión");

  }
};

export default LoginAction;