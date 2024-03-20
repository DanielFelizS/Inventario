import dayjs from "dayjs";
import TableButtons from "./table/TableButtons";

export type DataType = {
  [key: string]: any;
};

export type SearchProps<T extends DataType> = {
  DataFilter: T[];
  search: string;
  columnNames: string[];
  EditarPath: string;
  VerPath: string;
  EliminarPath: string;
};

const Search = <T extends DataType>({
  DataFilter,
  search,
  columnNames,
  EditarPath,
  VerPath,
  EliminarPath,
}: SearchProps<T>) => {
  return (
    <tbody>
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
                  columnName === "fecha_creacion"
                    ? dayjs(item[columnName]).format("DD/MM/YYYY")
                    : item[columnName]}
                </td>
              );
            })}
            <td>
              <TableButtons
                DataNavigate={item}
                EditarProp={EditarPath}
                VerProp={VerPath}
                EliminarProp={EliminarPath}
              />
            </td>
          </tr>
        ))}
    </tbody>
  );
};

export default Search;
