import { OrdenServicioDialogComponent } from './orden-servicio-dialog/orden-servicio-dialog.component';
// import { Component, OnInit } from '@angular/core';
import { Component, AfterViewInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
// import { DataTableModule, SharedModule } from 'primeng/primeng';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { OrdenServicioService } from '../../../../services/orden-servicio.service';
// import { GeneralesService } from '../../../../services/generales.service';
import { IOrdenServicio } from './../orden-servicio';
// import { IRazonDetenido } from '../../../../interfaces/generales.interface';
import { TdLoadingService } from '@covalent/core';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'orden-servicio-crud',
  templateUrl: './orden-servicio-crud.component.html',
  styleUrls: ['./orden-servicio-crud.component.scss'],
  viewProviders: [ OrdenServicioService ],
})
export class OrdenServicioCrudComponent implements AfterViewInit {


  sorting: boolean = true;
  pagination: boolean = true;
  pageSize: number = 5;

  data: any[] = [
      {
        'descripcion' : 'Lavado Pre Operativo',
        'hh' : '0.25',
        'avance' : ' .',
        'fecha' : '31/12/2016 ',
        'hora_ini' : ' ',
        'detener_iniciar' : '',
        'parcial' : '',
        'fin' : ' ',
        'te' : ' ',
        'hhe' : ' ',
        'dif' : '.'
      }, {
        'descripcion' : 'Servicio de los 25,00 KM',
        'hh' : '0.25',
        'avance' : ' .',
        'fecha' : '31/12/2016 ',
        'hora_ini' : ' ',
        'detener_iniciar' : '',
        'parcial' : '',
        'fin' : ' ',
        'te' : ' ',
        'hhe' : ' ',
        'dif' : '.'
      }, {
        'descripcion' : 'Inspeccion control de Calidad',
        'hh' : '0.25',
        'avance' : ' .',
        'fecha' : '31/12/2016 ',
        'hora_ini' : ' ',
        'detener_iniciar' : '',
        'parcial' : '',
        'fin' : ' ',
        'te' : ' ',
        'hhe' : ' ',
        'dif' : '.'
      }, {
        'descripcion' : 'Lavado pre-entrega',
        'hh' : '0.25',
        'avance' : ' .',
        'fecha' : '31/12/2016 ',
        'hora_ini' : ' ',
        'detener_iniciar' : '',
        'parcial' : '',
        'fin' : ' ',
        'te' : ' ',
        'hhe' : ' ',
        'dif' : '.'
  }
    ];

  sortBy: string = 'numero';
  sortOrder: string = 'DESC';

  rowSelection: boolean = false;
  multiple: boolean = true;

  codigo: string;
  // ordenServicios: IOrdenServicio[];
  ordenServicios: IOrdenServicio[];
  selectedOption: string;

  nombre: string;
  codcliente: string;
  vchdireccion: string;
  placa: string;
  carro: string;
  colores: string;
  anio: string;

  constructor(private _titleService: Title,
              private ordenServicioService: OrdenServicioService,
              private _loadingService: TdLoadingService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MdDialog
              // private ordenServicioService: OrdenServicioService
              // private _loadingService: TdLoadingService
  ) { }

  ngAfterViewInit(): void {
    // this._titleService.setTitle( 'Orden de servicio' );
    this.codigo = this.route.snapshot.params['id'];
    // this.route.snapshot.data['type'];
    this.cargaOrdenesServicioCodigo();
  }

  cargaOrdenesServicioCodigo(){
      this.ordenServicioService.queryCodigo(this.codigo).subscribe((data: IOrdenServicio[]) => {
        this.ordenServicios = data;
        // recorrer el array ...siempre debe haber 1 registro
        for(var i in data)
          {
              this.nombre = data[i].nombre;
              this.codcliente = data[i].codcliente;
              this.vchdireccion = data[i].vchdireccion;
              this.placa = data[i].placa;
              this.carro = data[i].carro;
              this.colores = data[i].colores;
              this.anio = data[i].anio;
          }
        setTimeout(() => {
          this._loadingService.resolve('items.load');
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

  Retornar(): void{
    this.router.navigate(['controlp/ordenservicio']);
  }

  Star(): void{
    console.log('prueba Inicio')
    // Actualizar la tabla y desactivar
  }

  Pausa(): void{
   let dialogRef = this.dialog.open(OrdenServicioDialogComponent);
      dialogRef.afterClosed().subscribe(result => {
        this.selectedOption = result;
        console.log(result);
      });
  }

  Stop(): void{
    console.log('prueba Stop ')
    alert('prueba stop');
  }
}

// @Component({
//   selector: 'snack-bar-component-example-snack',
//   template: `
//     <h3 md-dialog-title>Detener / Reiniciar Trabajo </h3>

//     <md-dialog-content>

//       <md-select placeholder="Razon" [(ngModel)]="selectedValue" name="food">
//           <md-option *ngFor="let food of foods" [value]="food.value">
//             {{food.viewValue}}
//           </md-option>
//       </md-select>
//       <br>
//       <md-input-container class="example-full-width">
//       <textarea md-input placeholder="Notas"></textarea>
//       </md-input-container>
//     </md-dialog-content>

//     <p-dataTable [value]="hist" scrollable="true" scrollHeight="200px">
//         <p-header>Vertical</p-header>
//         <p-column field="pfecha" header="Fecha"></p-column>
//         <p-column field="phora" header="Hora"></p-column>
//         <p-column field="razon" header="Razon o "></p-column>
//     </p-dataTable>

//     <md-dialog-actions layout="row" layout-align="end center">
//       <button type="button" md-raised-button color="accent" 
//             (click)="dialogRef.close('Aceptar')">Aceptar</button>
//       <button type="button" md-button 
//             (click)="dialogRef.close('Cancelar')">Cancelar</button>    
//     </md-dialog-actions>
//   `,
//    styleUrls: ['./orden-servicio-crud.component.scss'],
//    viewProviders: [ GeneralesService ],
// })
// // export class DialogResultExampleDialog {

//   foods: any[] = [
//       { 'value' : '01','viewValue' : 'Refrigerio' },
//       { 'value' : '02','viewValue' : 'Descanzo' },
//       { 'value' : '02','viewValue' : 'Cambio' }
//   ];

//   hist: any[] = [
//       { 'pfecha' : '27/11/2017' , 'phora' : '12:31' , 'prazon' : 'Refrigerio del Tecnico' ,
//         'rfecha' : '27/11/2017' , 'rhora' : '12:31' , 'rrazon' : 'Refrigerio del Tecnico' , 'nota' :'...'},
//       { 'pfecha' : '27/11/2017' , 'phora' : '12:31' , 'prazon' : 'Refrigerio del Tecnico' ,
//         'rfecha' : '27/11/2017' , 'rhora' : '12:31' , 'rrazon' : 'Refrigerio del Tecnico' , 'nota' :'...'},
//       { 'pfecha' : '27/11/2017' , 'phora' : '12:31' , 'prazon' : 'Refrigerio del Tecnico' ,
//         'rfecha' : '27/11/2017' , 'rhora' : '12:31' , 'rrazon' : 'Refrigerio del Tecnico' , 'nota' :'...'}
//   ];

//   razonDetenidos:IRazonDetenido[];

//   constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>,
//               private generalesService: GeneralesService
//               ) {}

//    cargaRazonDetenido(){
//       this.generalesService.queryRazonDetenidoAll().subscribe((data: IRazonDetenido[]) => {
//         this.razonDetenidos = data;
//         setTimeout(() => {
//           // this._loadingService.resolve('items.load');
//         }, 2000);
//       }, (error: Error) => {
//       //   this._itemsService.staticQuery().subscribe((data2: Object[]) => {
//       //     this.data2 = data2;
//       //     setTimeout(() => {
//       //       this._loadingService.resolve('items.load');
//       //     }, 2000);
//       //   });
//       }
//       );
//  }
 
// }
