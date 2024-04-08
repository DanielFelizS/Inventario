import dayjs from "dayjs";
import TableButtons from "./table/TableButtons";
import { SearchProps, DataType } from "../../types";

const Search = <T extends DataType>({
  DataFilter,
  search,
  columnNames,
  EditarPath,
  EliminarPath,
}: SearchProps<T>) => {
  return (
    <>
      {DataFilter
        .filter((row: any) => {
          return (
            search.trim() === "" ||
            columnNames.some(columnName =>
              typeof row[columnName] === "string" &&
              row[columnName]?.toLowerCase().includes(search.toLowerCase())
            )
          );
        })
        .map((item: T, index: number) => (
          <tr key={index}>
            {columnNames.map(columnName => {
              return (
                <td key={columnName}>
                  {columnName === "fecha_modificacion" ||
                  columnName === "fecha_creacion" || columnName === "fecha"
                    ? dayjs(item[columnName]).format("DD/MM/YYYY")
                    : item[columnName]}
                </td>
              );
            })}
            <td>
              <TableButtons
                DataNavigate={item}
                EditarProp={EditarPath}
                EliminarProp={EliminarPath}
              />
            </td>
          </tr>
        ))}
    </>
  );
};

export default Search;
