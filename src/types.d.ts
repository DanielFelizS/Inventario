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
    Navegar: () => void
}

export type CerrarProps = {
    btnCerrar: () => void;
}

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
export type SearchProps = {
    // DataFilter: T[];
    search: string;
    columnNames: string[];
    EditarPath: string;
    VerPath: string;
    EliminarPath: string;
};
export type InputTextProps = {
    InputTitle: string,
    InputType: string,
    InputPlaceholder?: string,
    InputName: string,
    Inputvalue: string,
    InputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
    Select4: string;
}

export type ParagraphProps = {
    TextParagraph: string;
    ValueParagraph: Array;
    APIUrl: string
}

export type PaginationProps = {
    PageCount: number,
    ActionPage: (data: { selected: number }) => void;
}