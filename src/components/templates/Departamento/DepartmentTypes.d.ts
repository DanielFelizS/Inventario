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