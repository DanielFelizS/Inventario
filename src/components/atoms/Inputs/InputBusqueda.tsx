import { InputSearch } from "../../../types";

export const InputBusqueda = ({ EventSearch, SearchValue }: InputSearch) => {
  return (
    <input
      type="text"
      placeholder="Buscar"
      value={SearchValue}
      onChange={EventSearch}
    />
  );
};

export default InputBusqueda;