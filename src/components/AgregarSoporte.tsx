import ModalUser from "./atoms/others/Modal";
import api from "../axiosData.mts";
import { SetStateAction, useState } from "react";

export type DataProps = {
  data: Array<() => void>;
};

const AgregarSoporte = ({ MostrarModal, CerrarModal }: any) => {
  const [username, setUsername] = useState<string>("");
  const [data, setData] = useState<DataProps["data"]>([]);
  const [error, setError] = useState("");

  const AddSoporte = async () => {
    try {
      const USERNAME = {
        UserName: username,
      };
      const response = await api.post("/usuarios/add-Soporte", USERNAME);
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
      setError("Error al agregar un soporte técnico");
      console.error(`Error al agregar un soporte técnico:  ${error}`);
    }
  };
  
  return (
    <>

      <ModalUser
        ModalTitle={"Agregar Soporte"}
        RolChange={AddSoporte}
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

export default AgregarSoporte;
