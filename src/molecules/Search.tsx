// import { useState } from "react";
import dayjs from "dayjs";
import TableButtons from "../atoms/table/TableButtons.js";
import { FormEditState } from "../types.js";

export type SearchState = {
  DataFilter:  any
  Search : string
}
export const Search = ({DataFilter, Search}: SearchState) => {

  return (
    <>
      <tbody>
        {DataFilter
          .filter((row: { nombre_equipo: string; propietario_equipo: string; }) => {
            const nombreEquipo = row.nombre_equipo;
            const PropietarioEquipo = row.propietario_equipo;
            if (!nombreEquipo) return false;
            else if (!PropietarioEquipo) return false;

            return (
              Search.trim() === "" ||
              nombreEquipo.toLowerCase().includes(Search.toLowerCase()) ||
              PropietarioEquipo.toLowerCase().includes(Search.toLowerCase())
            );
          })
          .map((devices: FormEditState) => (
            <tr key={devices.id}>
              <td>{devices.id}</td>
              <td>{devices.nombre_equipo}</td>
              <td>{devices.marca}</td>
              <td>{devices.modelo}</td>
              <td>{devices.estado}</td>
              <td>{devices.serial_no}</td>
              <td>{devices.cod_inventario}</td>
              <td>{devices.bienes_nacionales}</td>
              <td>{devices.propietario_equipo}</td>
              <td>{dayjs(devices.fecha_modificacion).format("DD/MM/YYYY")}</td>
              <td>
                <TableButtons DataNavigate={devices} />
              </td>
            </tr>
          ))}
      </tbody>
    </>
  );
};

export default Search;
