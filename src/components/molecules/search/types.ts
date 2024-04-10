export type DataType = {
    [key: string]: any;
};
export type SearchProps<T extends DataType> = {
    DataFilter: T[];
    search: string;
    columnNames: string[];
    EditarPath: string;
    EliminarPath: string;
};