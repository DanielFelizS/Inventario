import { SelectDepartamento } from "../../../types"
export const Select = ({ ValueID, DepartamentoChange, Departamento }: SelectDepartamento) => {
  return (
    <select value={ValueID} onChange={DepartamentoChange}>
    {Departamento.map((departamento: any) => (
        <option key={departamento.id} value={departamento.id}>{departamento.nombre}</option>
    ))}
</select>
  )
}

export default Select