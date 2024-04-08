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
}