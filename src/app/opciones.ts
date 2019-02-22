import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';

export class Opcion {
    id: number;
    name: string;
}
export interface ReporteServicio {
    id: number;
    Consecutivo: string;
    report_ant: String;
    revisiones: number;
    nivel_molestia: Number;
    venta_equipo: number;
    vendedor: string;
    instalacion: number;
    garantia: number;
    levanta_report: String;
    Fecha_report: Number;
    nombre_cliente: string;
    contacto: string;
    telefono: string;
    direccion: string;
    desc_equipo: string;
    Marca: String;
    Modelo: String;
    serie: string;
    falla: string;
    requisitos: string;
    fecha_promesa: number;
    obs: string;
    nombre_prov: string;
    diagnostico: string;
    descripcion: string;
    satisf_client: string;
    costo_client: number;
    costo_ref: number;
    costo_cobrar_cli: number;
    utilidad: number;
    precio_venta: number;


    /*Num_reportes: string;
    Cliente: string;
*/

    
 

    
}