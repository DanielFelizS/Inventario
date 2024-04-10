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
