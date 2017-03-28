import { Component, AfterViewInit } from '@angular/core';
import { GeneralesService } from '../../../../../services/generales.service';
import { IRazonDetenido } from '../../../../../interfaces/generales.interface';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-orden-servicio-dialog',
  templateUrl: './orden-servicio-dialog.component.html',
  styleUrls: ['./orden-servicio-dialog.component.scss'],
  viewProviders: [ GeneralesService ],
})
export class OrdenServicioDialogComponent implements AfterViewInit {

  hist: any[] = [
      { 'pfecha' : '27/11/2017' , 'phora' : '12:31' , 'prazon' : 'Refrigerio del Tecnico' ,
        'rfecha' : '27/11/2017' , 'rhora' : '12:31' , 'rrazon' : 'Refrigerio del Tecnico' , 'nota' : '...'},
      { 'pfecha' : '27/11/2017' , 'phora' : '12:31' , 'prazon' : 'Refrigerio del Tecnico' ,
        'rfecha' : '27/11/2017' , 'rhora' : '12:31' , 'rrazon' : 'Refrigerio del Tecnico' , 'nota' : '...'},
      { 'pfecha' : '27/11/2017' , 'phora' : '12:31' , 'prazon' : 'Refrigerio del Tecnico' ,
        'rfecha' : '27/11/2017' , 'rhora' : '12:31' , 'rrazon' : 'Refrigerio del Tecnico' , 'nota' : '...'}
  ];

  razonDetenidos:IRazonDetenido[];

  constructor(public dialogRef: MdDialogRef<OrdenServicioDialogComponent>,
              private generalesService: GeneralesService
              ) {}

  ngAfterViewInit(): void {
    this.cargaRazonDetenido();
  }

   cargaRazonDetenido(){
      this.generalesService.queryRazonDetenidoAll().subscribe((data: IRazonDetenido[]) => {
        this.razonDetenidos = data;
        console.log(this.razonDetenidos);
        setTimeout(() => {
          // this._loadingService.resolve('items.load');
        }, 2000);
      }, (error: Error) => {
      //   this._itemsService.staticQuery().subscribe((data2: Object[]) => {
      //     this.data2 = data2;
      //     setTimeout(() => {
      //       this._loadingService.resolve('items.load');
      //     }, 2000);
      //   });
      }
      );
 }
}
