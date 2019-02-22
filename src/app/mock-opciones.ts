import { Opcion, ReporteServicio } from "./opciones";
import { NgModel } from '@angular/forms';
import { ArrayType } from '@angular/compiler';
import { DashboardComponent } from "./dashboard/dashboard.component";


export const opciones: Opcion[] =[
    { id: 1, name: 'Instalacion' },
    { id: 2, name: 'Revision y diagnostico para cotizar' },
    { id: 3, name: 'Mantenimiento' },
    { id: 4, name: 'Reparacion' },
    { id: 5, name: 'Revision, Diagnostico si procede garantia reparar, si no procede cotizar' }
]

export const Cliente: Opcion[] = [
    {id:0, name: '--------'},
    { id: 1, name: 'Mala' },
    { id: 2, name: 'Buena' },
    { id: 3, name: 'Exelente' }
]

//console.log(DashboardComponent);

export const Table_Reportes: ReporteServicio[] = [
    { id: 0, Consecutivo: 'RS0216', report_ant: 'ads', revisiones: 3, nivel_molestia: 2, venta_equipo: 1, vendedor: 'H', instalacion: 2, garantia: 1, levanta_report: 'Luis', Fecha_report: 12/12/11 ,nombre_cliente: 'Luis', contacto: 'Luis', telefono: 'Luis', direccion: 'Luis', desc_equipo: 'Luis', Marca: 'Luis', Modelo: 'Luis', serie: 'Luis', falla: 'Luis', requisitos: 'Luis', fecha_promesa: 12/12/12, obs: 'Luis', nombre_prov: 'Luis', diagnostico: 'Luis', descripcion: 'Luis', satisf_client: 'Luis', costo_client: 12, costo_ref: 12, costo_cobrar_cli: 12, utilidad: 12, precio_venta: 12}
];

