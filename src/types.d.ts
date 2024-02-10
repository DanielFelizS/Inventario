export type btnProps = {
    action: () => void,
    btnlabel: any,
    btncolor: string
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
    EventSearch: (e: ChangeEvent<HTMLInputElement>) => void;
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
    TextParagraph: string,
    ValueParagraph: Array;
}

export type LoginData = {
    username: string,
    password: string,
    userRol: string,
}

export type PaginationProps = {
    PageCount: number, 
    ActionPage: (data: { selected: number }) => void;
}

export interface FormAddState {
    nombreEquipo: string
    marca: string
    modelo: string
    noSerie: string
    inventario: string
    bienesNacionales: number
    propietario: string
    estado: string
    fecha: string
    data: Array< ()=> void >
}

export interface FormEditState {
    id: string
    nombre_equipo: string
    marca: string
    modelo: string
    serial_no: string
    cod_inventario: string
    bienes_nacionales: number
    propietario_equipo: string
    estado: string
    fecha_modificacion: string
}

export interface Devices extends FormEditState{
    original: any;
    actions: any;
}

