import dayjs from "dayjs";
import TableButtons from "../atoms/table/TableButtons.js";

export type DataType = {
  [key: string]: any;
};

export type SearchProps<T extends DataType> = {
  DataFilter:  T[]
  Search : string
  columnNames: string[]
  EditarPath: string 
  VerPath: string
  EliminarPath: string
}

export const Search = <T extends DataType>({DataFilter, Search, columnNames, EditarPath, VerPath, EliminarPath}: SearchProps<T>) => {

  return (
    <>
      <tbody>
        {DataFilter
          .filter((row: any) => {
            return (
              Search.trim() === "" ||
              columnNames.some(columnName => 
                typeof row[columnName] === 'string' && row[columnName]?.toLowerCase().includes(Search.toLowerCase())
              )
            );
          })
          .map((item: T, index: number) => (
            <tr key={index}>
              {columnNames.map(columnName => {
                if (columnName === 'fecha_modificacion') {
                  return <td key={columnName}>{dayjs(item[columnName]).format("DD/MM/YYYY")}</td>
                } if (columnName === 'fecha_creacion') {
                  return <td key={columnName}>{dayjs(item[columnName]).format("DD/MM/YYYY")}</td>
                } else{ 
                  return <td key={columnName}>{item[columnName]}</td>
                }
              })}
              <td>
                <TableButtons DataNavigate={item} EditarProp={EditarPath} VerProp={VerPath} EliminarProp={EliminarPath} />
              </td>
            </tr>
          ))}
      </tbody>
    </>
  );
};

export default Search;
