import { OrdenServicioService } from './../../../../services/orden-servicio.service';
import { IOrdenServicio } from './../orden-servicio';
import { Component, AfterViewInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Router } from '@angular/router';

import { Title }     from '@angular/platform-browser';
// import { OrdenServicioService } from '../../../services/orden-servicio.service';
// import { Response } from '@angular/http';

import { TdLoadingService } from '@covalent/core';
// import { IOrdenServicio } from './orden-servicio';
// import {Message,MenuItem,HeaderColumnGroup,Row,RowExpansionLoader,Growl} from 'primeng/primeng';
// import { TdDataTableSortingOrder } from '@covalent/data-table';

@Component({
 selector: 'app-pintado',
  templateUrl: './pintado.component.html',
  styleUrls: ['./pintado.component.scss'] ,
  viewProviders: [ OrdenServicioService ],
})
export class PintadoComponent implements AfterViewInit {


  fecini: Date = new Date();
  fecfin: Date = new Date();

  LocaleSettings:any ={
        firstDayOfWeek: 1,
        dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
        dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
        dayNamesMin: [ "D","L","M","X","J","V","S" ],
        monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
        monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ]
    };
  // defaultDate:Date = new Date();
  fecIniS: string;
  fecFinS: string;
  dateFormat: string =  'dd/MM/yyyy';

  displayDialog: boolean;
  // iordenServicio: IOrdenServicio = new OrdenServicioBean();
  selectedOrdenServicio: IOrdenServicio;
  newOrdenServicio: boolean;
  ordenServicios: IOrdenServicio[];

  selectedOption: string;

  constructor(private _titleService: Title, 
              private ordenServicioService: OrdenServicioService,
              private _loadingService: TdLoadingService,
              public dialog: MdDialog,
              public router: Router)
              { }

  ngAfterViewInit(): void {

      // Valoreses inicales de las fechas
      this._titleService.setTitle( 'Pintado' );
      this.fecini.setDate(this.fecini.getDate() - 180);
      this.cargaOrdenesServicio();
  }

   onRowSelect(event) {

        // this.newOrdenServicio = false;
        // this.iordenServicio = this.cloneOrdenServicio(event.data);
        // let dialogRef = this.dialog.open(DialogResultExampleDialog);
        // dialogRef.afterClosed().subscribe(result => {
        //   this.selectedOption = result;
        //   console.log(result);
        // });
        // alert(this.iordenServicio.codigo);

        // console.log('event.data');
        // console.log(event.data);
        // console.log(event.data.codigo);

        this.router.navigate(['controlp/pintado/'+event.data.codigo+'/edit']);

   }

   cargaOrdenesServicio(): void {
      this.fecIniS = this.fecini.toISOString().slice(0,10).replace(/-/g,"");
      this.fecFinS = this.fecfin.toISOString().slice(0,10).replace(/-/g,"");
      this.ordenServicioService.queryFechasPIN(this.fecIniS,this.fecFinS).subscribe((data: IOrdenServicio[]) => {
        this.ordenServicios = data;
        // console.log(this.data);
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

  onChangeFecIni(newValue): void {
    this.fecini = newValue;
    this.cargaOrdenesServicio();
  }

  onChangeFecFin(newValue): void {
    this.fecfin = newValue;
    this.cargaOrdenesServicio();
  }

}
