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
