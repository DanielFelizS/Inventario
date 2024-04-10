export type InputSearch = {
    EventSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    SearchValue : string
}
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