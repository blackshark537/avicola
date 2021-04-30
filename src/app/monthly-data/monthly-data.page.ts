import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiService, BrowserService } from '../services';

@Component({
  selector: 'app-monthly-data',
  templateUrl: './monthly-data.page.html',
  styleUrls: ['./monthly-data.page.scss'],
})
export class MonthlyDataPage implements OnInit {
  year= new BehaviorSubject(new Date().getFullYear());
  rows = [];
  cols=[
    {prop: 'empresa', header: 'Nombre Comercial'},
    {prop: 'entrydate', header:'Fecha de Entrada'},
    {prop: 'balance', header: 'Balance'},
    {prop: 'jan', header: 'Enero'},
    {prop: 'feb', header: 'Febrero'},
    {prop: 'mar', header: 'Marzo'},
    {prop: 'apr', header: 'Abril'},
    {prop: 'may', header: 'Mayo'},
    {prop: 'jun', header: 'Junio'},
    {prop: 'jul', header: 'Julio'},
    {prop: 'ago', header: 'Agosto'},
    {prop: 'sep', header: 'Septiembre'},
    {prop: 'oct', header: 'Octubre'},
    {prop: 'nov', header: 'Noviembre'},
    {prop: 'dic', header: 'Diciembre'},
  ];
  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.year.pipe(
      switchMap(year =>{
      return this.apiService.getLotsByYear(year).pipe(
        map(lots=>{
          let row = [];
          lots.forEach( (lot,i) => {  
            row.push(          {
              id: i+1,
              empresa: lot.empresa?.nombre_comercial,
              entrydate: new Date(lot.fecha_entrada).toLocaleDateString(),
              jan: lot.fecha_entrada.split('-')[1]=='01'? lot.cantidad.hembras : '',
              feb: lot.fecha_entrada.split('-')[1]=='02'? lot.cantidad.hembras : '',
              mar: lot.fecha_entrada.split('-')[1]=='03'? lot.cantidad.hembras : '',
              abr: lot.fecha_entrada.split('-')[1]=='04'? lot.cantidad.hembras : '',
              may: lot.fecha_entrada.split('-')[1]=='05'? lot.cantidad.hembras : '',
              jun: lot.fecha_entrada.split('-')[1]=='06'? lot.cantidad.hembras : '',
              jul: lot.fecha_entrada.split('-')[1]=='07'? lot.cantidad.hembras : '',
              ago: lot.fecha_entrada.split('-')[1]=='08'? lot.cantidad.hembras : '',
              sep: lot.fecha_entrada.split('-')[1]=='09'? lot.cantidad.hembras : '',
              oct: lot.fecha_entrada.split('-')[1]=='10'? lot.cantidad.hembras : '',
              nov: lot.fecha_entrada.split('-')[1]=='11'? lot.cantidad.hembras : '',
              dic: lot.fecha_entrada.split('-')[1]=='12'? lot.cantidad.hembras : '',
              balance: parseInt(lot.empresa?.cant_gallinas_asignadas) - parseInt(lot.cantidad.hembras)
            })
          });
          return row;
      }))
    })).subscribe(rows => this.rows = rows);
  }

  setYear(value){
    this.year.next(new Date(value).getFullYear());
  }
}
