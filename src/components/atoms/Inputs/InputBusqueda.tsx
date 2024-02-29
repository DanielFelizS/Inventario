import { InputSearch } from "../../../types";

export const InputBusqueda = ({ EventSearch }: InputSearch) => {
  return (
    <input
      type="text"
      placeholder="Buscar"
      onChange={EventSearch}
    />
  );
};

export default InputBusqueda;