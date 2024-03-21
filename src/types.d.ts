export type btnProps = {
    action: () => void,
    btnlabel: any,
    btncolor: string
}
export type SelectDepartamento = {
    DepartamentoChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    ValueID: number
    Departamento: any[]
}
export interface NavegarProps {
    Navegar: ()=> void
}

export interface DeleteModalProps extends NavegarProps {
    Delete: ()=> void;
}

export type CerrarProps = {
    btnCerrar: ()=> void;
}

export type btnDescargarProps = {
    DownloadData: Array < ()=> void >
}

export type InputSearch = {
    SearchValue: string;
    EventSearch: (e: ChangeEvent<HTMLInputElement>) => void;
};

export interface PropsTable {
    searchData: string;
    APIPath: string;
    APINames: string[]
    EditarDatos: string
    EliminarDatos: string
    Header: string[]
}

export type DataType = {
    [key: string]: any;
};

export type SearchProps = {
    // DataFilter: T[];
    search: string;
    columnNames: string[];
    EditarPath: string;
    VerPath: string;
    EliminarPath: string;
};

export type InputDobleProps = {
    InputName: string,
    FirstValue: string | number,
    FirstChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    FirstType: string,
    FirstPlaceholder: string,
    FirstName: string,
    SecondValue: string | number,
    SecondChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    SecondType: string,
    SecondPlaceholder: string,
    SecondName: string;
}

export type SelectFormProps = {
    Inputvalue: string,
    InputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    InputName: string,
    Select1: string,
    Select2: string,
    Select3: string;
}

export type InputTextProps = {
    InputTitle: string,
    InputType: string,
    InputName: string,
    Inputvalue: string,
    InputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type ParagraphProps = {
    TextParagraph: string;
    ValueParagraph: Array;
    APIUrl: string
}

export type LoginData = {
    userName: string;
    password: string;
}

export type PaginationProps = {
    PageCount: number, 
    ActionPage: (data: { selected: number }) => void;
}

export interface DevicesAddState {
    nombreEquipo: string
    marca: string
    modelo: string
    noSerie: string
    inventario: string
    bienesNacionales: number
    propietario: string
    departamentoId: any
    estado: string
    fecha: string
    data: Array< ()=> void >
}

export interface DevicesEditState {
    id: string
    nombre_equipo: string
    marca: string
    modelo: string
    serial_no: string
    cod_inventario: string
    bienes_nacionales: number
    propietario_equipo: string
    departamentoId: any
    estado: string
    fecha_modificacion: string
}

export interface DepartamentAddState{
    nombre: string
    descripción: string
    fecha_creacion: string
    encargado: string
    departamentoData: Array< ()=> void >
}

export interface DepartamentEditState{
    id: string
    nombre: string
    descripción: string
    fecha_creacion: string
    encargado: string
}

export interface ComputerAddState{
    equipo_Id: any
    ram: string
    disco_duro: string
    procesador: string
    ventilador: string
    fuentePoder: string
    motherBoard: string
    tipo_MotherBoard: string
    ComputerData: Array< ()=> void >
}

export interface ComputerEditState{
    id: string
    equipo_Id: any
    ram: string
    disco_duro: string
    procesador: string
    ventilador: string
    fuentePoder: string
    motherBoard: string
    tipo_MotherBoard: string
    // ComputerData: Array< ()=> void >
}

export type UserEditState = {
    id: string
    firstName: string
    lastName: string
    userName: string
    email: string
}