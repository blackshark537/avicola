import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { finalize, map, mergeMap, tap } from 'rxjs/operators';
import { LotsActions, eggLotsActions, projectionsActions } from '../actions';
import { AppModel, EggLotInterface, EggLotProjectionInterface, LotProjection } from '../models';
import { LotService } from '../services';

@Injectable({
    providedIn: 'root'
})
export class LotsEffects {

    _PROD=[0,8,13.4,38.4,58.4,82.4,90.4,93.4,95.4,96.4,97.4,97.4,97.4,97.4,97.4,98.4,98.4,98.4,97.4,97.4,97.4,97.4,
    97.4,97.4,97.4,97.4,97.4,97.4,97.4,96.4,96.4,96.4,96.4,96.4,96.4,95.4,95.4,95.4,94.4,93.4,92.4,92.4,91.4,
    91.4,91.4,91.4,91.4,91.4,90.4,89.4,88.4,88.4,87.4,87.4,87.4,86.4,86.4,85.4,85.4,84.4,84.4,83.4,83.4,82.4,
    82.4,82.4,81.4,81.4,81.4,81.4,80.4,80.4,80.4,79.4,79.4,78.4,78.4,77.4,77.4,76.4,76.4,75.4,74.4,74.4,73.4,73.4,73.4,
    ,73.4,73.4,73.4,73.4,73.4,73.4,73.4,73.4,73.4,73.4,73.4,73.4,73.4,73.4,73.4,73.4,73.4,73.4,73.4,73.4,73.4,73.4];

    public months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    public date = new Date();
    public years = [ this.date.getFullYear() - 2,this.date.getFullYear() - 1, this.date.getFullYear(), this.date.getFullYear() + 1]

    getLot$ = createEffect(() => this.action$.pipe(
        ofType(LotsActions.GET_LOTS),
        mergeMap(() => this.lotService.getLots().pipe(
            map(lots => LotsActions.GET_LOTS_SUCCEEDED({ lots })),
            finalize(() => this.getEggsLots())
        )
        )
    )
    );

    constructor(
        private action$: Actions,
        private store: Store<AppModel>,
        private lotService: LotService
    ) { }

    getEggsLots() {
        this.store.select('projections').pipe(
            map(pro => {
                return pro.filter(p => p.year >= this.years[0])
            })
        ).subscribe(resp => {
            if (!!resp) this.formatData(resp);
        });
    }

    formatData(resp) {
        let monthly = [];

        this.years.forEach((val, y) => {
            let numero_nac_anual = 0;
            this.months.forEach(m => {
                let month = [];
                for (let i = 1; i < 32; i++) {
                    let pro = resp.filter(p => p.year === val && p.month === m && p.day === i);
                    let numero_nac = 0;
                    let d: Date = null;
                    let daysInMonth: Date = null;

                    pro.forEach((pro, k) => {
                        const el = pro as LotProjection
                        d = new Date(el.dia);
                        let mt = d.getMonth() + 1;
                        let yr = d.getFullYear();
                        daysInMonth = new Date(yr, mt, 0);

                        if (k < 595) {
                            numero_nac += parseInt(el.nacimientos_totales);
                            numero_nac_anual += parseInt(el.nacimientos_totales);
                        }
                    });
                    //console.log(`${m}: ${i}`, numero_aves)
                    month.push({ year: d?.getFullYear(), month: d?.getMonth() + 1, date: d?.getDate(), day: d?.getDay(), numero_nac, numero_nac_anual });
                    if (i >= daysInMonth?.getDate()) continue;
                }
                if (!!m) monthly.push(...month);
            });
            /* console.log(`${val}: `,numero_nac_anual) */
        });
        this.generateData(monthly);
    }

    async generateData(monthly: any[]) {
        let data_l: EggLotInterface[] = [];
        let data_v: EggLotInterface[] = [];
        let acc_l = null;
        let acc_v = null;
        
        //console.log(monthly[23]);

        monthly.forEach((el, i)=> {
            if (el.day > 1 && el.day < 6) {
                acc_l = null;
                if (el.day < 5) acc_v += el?.numero_nac;
                if (el.day === 5){
                    let lot = {
                        date: new Date(`${el.month}/${el.date}/${el.year}`),
                        year: el?.year,
                        day: el.date,
                        month:  el?.month,
                        dia: el?.day,
                        day_name: 'viernes',
                        cant_gallinas_proyectadas: acc_v,
                        variable_mortalidad_recria: 6,
                        variable_mortalidad_produccion: 14,
                        variable_produccion_huevos_totales: 3
                    }

                    let recria = this.getRecria(lot);
                    let production = this.getProd(recria[recria.length-1]);
                    const id= this.genId();
                    let lote={
                        id,
                        ...lot,
                        days: this.lotService.daysBetween(lot.date,new Date(Date.now())),
                        recria: [...recria],
                        produccion: [...production]
                    }
                    
                    let projections = this.genProjection(lote);

                    const final={
                        id,
                        ...lot,
                        days_passed: this.lotService.daysBetween(lot.date, new Date()),
                        weeks_passed: this.lotService.weeksBetween(lot.date, new Date()),
                        projections,
                        production: projections[lote.days]?.prod_huevos_totales,
                        cant_gallinas_existentes: projections[lote.days]?.numero_de_aves,
                        estado: lote.days > 126 ? 'produccion' : 'recria',//projections[lote.days]?.estado
                    } as EggLotInterface;
                    data_v.push(final);
                }
            }

            if (el?.day > 4 || el?.day < 2) {
                acc_v = null;
                acc_l += el?.numero_nac;
                if (el.day === 1){
                    const lot = {
                        date: new Date(`${el.month}/${el.date}/${el.year}`),
                        year: el?.year,
                        day: el?.date,
                        dia: el?.day,
                        month:  el?.month,
                        day_name: 'lunes',
                        cant_gallinas_proyectadas: acc_l,
                        variable_mortalidad_recria: 6,
                        variable_mortalidad_produccion: 14,
                        variable_produccion_huevos_totales:3,
                    }
                    let recria = this.getRecria(lot);
                    let production = this.getProd(recria[recria.length-1]);
                    const id= this.genId();
                    let lote={
                        id,
                        ...lot,
                        days: this.lotService.daysBetween(lot.date,new Date()),
                        recria: [...recria],
                        produccion: [...production]
                    }
                    
                    let projections = this.genProjection(lote);

                    const final={
                        id,
                        ...lot,
                        days_passed: this.lotService.daysBetween(lot.date,new Date()),
                        weeks_passed: this.lotService.weeksBetween(lot.date, new Date()),
                        projections,
                        production: projections[lote.days]?.prod_huevos_totales,
                        cant_gallinas_existentes: projections[lote.days]?.numero_de_aves,
                        estado: lote.days > 126 ? 'produccion' : 'recria'
                    } as EggLotInterface;
                    data_l.push(final);
                }
            }
        });
        let rows = [...data_v, ...data_l]
        rows.forEach((row, i) => {
            row.id = i + 1;
        });
        this.store.dispatch(eggLotsActions.SET_EGG_LOTS({ eggLots: [...rows] }));
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
private getRecria(lote: EggLotInterface) {
    let recria = [];
    let index = 0;
    const total_weeks = 18;
    for (let i = 0; i < total_weeks * 7; i++) {
  
        if (i % 7 === 0) index += 1;
  
        const { 
            variable_mortalidad_recria,
            variable_mortalidad_produccion, 
            date, cant_gallinas_proyectadas ,
            variable_produccion_huevos_totales,
        } = lote;
  
        const percent = recria[i - 1]?.mort || 100;
        const mortality = percent - (variable_mortalidad_recria / (total_weeks * 7));
        let d = new Date(date);
        const date1 = new Date(d?.getTime() + (1 * 24 * 60 * 60 * 1000))
        const date2 = new Date(d?.getTime() + ((i * 24 * 60 * 60 * 1000)));
  
        recria.push({
            id: i,
            day: this.lotService.daysBetween(date1, date2) + i,//day:i+1,
            weekAge: index,
            mort: Math.round(mortality * 100) / 100,
            variable_mortalidad_produccion,
            standar: 0,
            stdreal: 0,
            hincub: 0,
            prodhtotal: 0, //total eggs
            variable_produccion_huevos_totales,
            entry: date2,
            chicks: Math.round(cant_gallinas_proyectadas - ((100 - mortality) * 10)),
        });
    }
    return recria;
  }
  
   private getProd(lote) {
    let prod = [];
    let index = 0;
    const total_weeks = 67;
    const conf_weeks = 0;
    for (let i = 0; i < total_weeks * 7; i++) {
  
        if (i % 7 === 0) index += 1;
  
        const { day, entry, chicks, variable_mortalidad_produccion, variable_produccion_huevos_totales } = lote;
  
        const percent = prod[i - 1]?.mort || 100;
        const mortality = percent - (variable_mortalidad_produccion / (total_weeks * 7));

        const production_real = (this._PROD[index]>0? this._PROD[index]- variable_produccion_huevos_totales : this._PROD[index])  / 100;
        const date2 = new Date(entry?.getTime() + ((1 * 24 * 60 * 60 * 1000) * (i + 1)));
  
        if (i <= (conf_weeks * 7)) {
            prod.push({
                id: i,
                weekAge: index,
                day: lote.day + i + 1,//add 1 day
                dayIndx: day,
                mort: Math.round(mortality * 100) / 100,
                entry: date2,
                standar: this._PROD[index],
                chicks: Math.round(chicks - ((100 - mortality) * 10)),
                stdreal: 0,
                prodhtotal: 0, //total eggs
            });
        } else {
            prod.push({
                id: i,
                weekAge: index,
                day: lote.day + i + 1,//add 1 day
                dayIndx: day,
                mort: Math.round(mortality * 100) / 100,
                entry: date2,
                standar: this._PROD[index],
                chicks: Math.round(chicks - ((100 - mortality) * 10)),
                stdreal: production_real,
                prodhtotal: parseInt(((Math.round(chicks - ((100 - mortality) * 10)) * production_real)).toFixed(0)), //total eggs
            });
        }
  
    }
    return prod;
  }

  private genProjection(lot): EggLotProjectionInterface[] {
    let dt:EggLotProjectionInterface[] = [];
    lot.recria.forEach(recria => {
        let projection = {
            id: lot.id,
            age: recria.weekAge,
            dia: recria.entry,
            estado: 'recria',
            mortalidad: recria.mort,
            estandar_produccion: recria.standar,
            estandar_real: recria.stdreal,
            year: recria.entry.getFullYear(),
            month: recria.entry.getMonth() + 1,
            day: recria.entry.getDate(),
            prod_huevos_totales: recria.prodhtotal,
            numero_de_aves: recria.chicks,
        } as EggLotProjectionInterface;
        dt.push(projection)
    });
    lot.produccion.forEach(production => {
        let projection = {
            id: lot.id,
            age: production.weekAge+18,
            dia: production.entry,
            estado: 'produccion',
            mortalidad: production.mort,
            estandar_produccion: production.standar,
            estandar_real: production.stdreal,
            year: production.entry.getFullYear(),
            month: production.entry.getMonth() + 1,
            day: production.entry.getDate(),
            prod_huevos_totales: production.prodhtotal,
            numero_de_aves: production.chicks,
        } as EggLotProjectionInterface;
        dt.push(projection)
    });
    return dt;
  }


  genId(): string{
    const qwerty='ABCDEFGHIJKLMNOPQRSTUVYWZ0123456789abcdefghijklmnopqrstuvyz_'
    let id='';
    for (let i = 0; i < 10; i++) {
        id += qwerty[Math.floor(Math.random()*qwerty.length-1)];
    }
    return id;
  }
}