import { InputSearch } from "../../../types";

export const InputBusqueda = ({ EventSearch }: InputSearch) => {
  return (
    <input
      type="text"
      placeholder="Nombre equipo o Propietario"
      onChange={EventSearch}
    />
  );
};

export default InputBusqueda;