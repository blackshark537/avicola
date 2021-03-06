export interface  EggLotInterface{
    id?:number  | string;
    date: string | Date; 
    year: number;
    day: number;
    dia: number;
    month: number;
    day_name: string;
    estado?: string;
    cant_gallinas_proyectadas: number;
    variable_mortalidad_recria: number;
    variable_mortalidad_produccion: number;
    variable_produccion_huevos_totales: number;
    production?: number;
    projections?:EggLotProjectionInterface[];
    days_passed?: number;
    weeks_passed?: number;
    cant_gallinas_existentes?: number;
}

export interface  EggLotProjectionInterface{
    id?: string | number;
    dia: Date;
    estado: string;
    mortalidad: number;
    estandar_produccion: number;
    estandar_real: number;
    year: number;
    month: number;
    day: number;
    prod_huevos_totales: number;
    numero_de_aves: number;
}