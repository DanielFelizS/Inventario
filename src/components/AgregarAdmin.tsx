import ModalUser from "./atoms/others/Modal";
import api from "../axiosData.mts";
import { SetStateAction, useState } from "react";

export type DataProps = {
  data: Array<() => void>;
};

const AgregarAdmin = ({MostrarModal, CerrarModal}: any) => {
  const [username, setUsername] = useState<string>("");
  const [data, setData] = useState<DataProps["data"]>([]);
  const [error, setError] = useState("");

  const AddAdmin = async () => {
    try {
      const USERNAME = {
        UserName: username,
      };
      const response = await api.post("/usuarios/add-Admin", USERNAME);
      const responseData = response.data;
      if (responseData.isSucceed) {
        setData([...data, responseData]);
        setUsername("");
        alert(responseData.message);
        {CerrarModal()};
      } 
      // else {
      //   alert(responseData.message);
      // }
    } catch (error) {
      setError(`Error al agregar un administrador`);
      console.error(`Error al agregar un administrador:  ${error}`);
    }
  };
  
  return (
    <>
      <ModalUser
        ModalTitle={"Agregar admin"}
        RolChange={AddAdmin}
        ModalShow={MostrarModal}
        CloseModal={CerrarModal}
        ModalValue={username}
        ModalChange={(e: { target: { value: SetStateAction<string> } }) =>
          setUsername(e.target.value)
        }
      />
      { error && <span style={{color: "red"}}>{error}</span> }
    </>
  );
};

export default AgregarAdmin;