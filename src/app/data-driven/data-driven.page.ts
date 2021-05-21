import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiService } from '../services';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.page.html',
  styleUrls: ['./data-driven.page.scss'],
})
export class DataDrivenPage implements OnInit {
  year = new BehaviorSubject(new Date().getFullYear());
  actual_year= new Date().getFullYear();
  rows = [];
  status={
    asignacion:0,
    importacion:0,
    balance:0
  }
  cols  = [
    {prop: 'empresa', header:'Empresa y/o Productor'},
    {prop: 'entrydate', header:'Fecha de<br>Entrada'},
    {prop: 'asignacion', header:'Rep. Livianas<br>Asignadas'},
    {prop: 'importadas', header:'Rep. Livianas<br>Importadas'},
    {prop: 'balance', header:'Balance'},
    //{prop: 'cuota_asignacion', header:'Part. de<br>Asignación % '},
    {prop: 'cuota_importacion', header:'% Part. de<br>Importación'},
  ]
  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.year.pipe( 
      switchMap(year =>{
        return this.apiService.getLotsByYear(year).pipe(
          map(lots=>{
            let asignacionTotal = 0
            let importacionTotal = 0
            let row = [];
            this.status={
              asignacion:0,
              importacion:0,
              balance:0
            }

            lots.forEach(lot=>{
              asignacionTotal+=parseInt(lot.empresa?.cant_gallinas_asignadas)
              importacionTotal+=parseInt(lot.cantidad.hembras)
              this.status.asignacion+=parseInt(lot.empresa?.cant_gallinas_asignadas)
              this.status.importacion+=parseInt(lot.cantidad.hembras)
              this.status.balance+=parseInt(lot.empresa?.cant_gallinas_asignadas)-parseInt(lot.cantidad.hembras)
            });
      
            lots.forEach((lot, i)=>{
              let r = row.filter(r => r.empresa === lot.empresa.nombre_comercial)[0] 
              if(!!r){
                r.importadas+= parseInt(lot.cantidad.hembras);
                r.balance= parseInt(lot.empresa?.cant_gallinas_asignadas)-parseInt(r.importadas)
                r.cuota_importacion= ((parseInt(r.importadas)/importacionTotal)*100).toFixed(2),
                console.log('af', r)
              } else {
                row.push({
                  id:i+1,
                  lotId: lot.id,
                  empresa: lot?.empresa?.nombre_comercial,
                  entrydate: new Date(lot.fecha_entrada).toLocaleDateString(),
                  asignacion: lot.empresa?.cant_gallinas_asignadas,
                  importadas: parseInt(lot.cantidad.hembras),
                  cuota_asignacion: ((parseInt(lot.empresa?.cant_gallinas_asignadas)/asignacionTotal)*100).toFixed(2),
                  cuota_importacion:  ((parseInt(lot.cantidad.hembras)/importacionTotal)*100).toFixed(2),
                  balance: parseInt(lot.empresa?.cant_gallinas_asignadas)-parseInt(lot.cantidad.hembras)
                });
              }
            });
            return row;
          })
        );
    })).subscribe(rows => this.rows = rows);
  }

  setYear(value){
    this.year.next(new Date(value).getFullYear());
  }

  selected(evt){
  }
}
