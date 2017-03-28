import { Component, AfterViewInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { Router } from '@angular/router';

import { Title }     from '@angular/platform-browser';
import { OrdenServicioService } from '../../../services/orden-servicio.service';
// import { Response } from '@angular/http';

import { TdLoadingService } from '@covalent/core';
import { IOrdenServicio } from './orden-servicio';
// import {Message,MenuItem,HeaderColumnGroup,Row,RowExpansionLoader,Growl} from 'primeng/primeng';
// import { TdDataTableSortingOrder } from '@covalent/data-table';

@Component({
  selector: 'orden-servicio',
  templateUrl: './orden-servicio.component.html',
  styleUrls: ['./orden-servicio.component.scss'],
  viewProviders: [ OrdenServicioService ],
})
export class OrdenServicioComponent implements AfterViewInit {


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
  fecIniS:string;
  fecFinS:string;
  dateFormat:string =  'dd/MM/yyyy';

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
      //   this._titleService.setTitle( 'Orden de servicio' );
      this.fecini.setDate(this.fecini.getDate() - 80);
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

        this.router.navigate(['controlp/ordenservicio/'+event.data.codigo+'/edit']);

   }

   cargaOrdenesServicio(){
      this.fecIniS = this.fecini.toISOString().slice(0,10).replace(/-/g,"");
      this.fecFinS = this.fecfin.toISOString().slice(0,10).replace(/-/g,"");
      this.ordenServicioService.queryFechasPRE(this.fecIniS,this.fecFinS).subscribe((data: IOrdenServicio[]) => {
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

  onChangeFecIni(newValue){
    this.fecini = newValue;
    this.cargaOrdenesServicio();
  }

  onChangeFecFin(newValue) {
    this.fecfin = newValue;
    this.cargaOrdenesServicio();
  }

}

// class OrdenServicioBean implements IOrdenServicio {

//     constructor (
//     public codigo?,
//     public nombre?,
//     public placa?,
//     public kilometraje?,
//     public asesor?,
//     public estado?,
//     public carro?,
//     public llave?,
//     public fechacreacion?,
//     public horacreacion?,
//     public colores?,
//     public observacion?
//     ){}
// }


// @Component({
//   selector: 'snack-bar-component-example-snack',
//   template: `
//     <h3 md-dialog-title>Simple Dialog</h3>
//     <md-dialog-content>
//       <p>Apply a <code>md-dialog-title</code> attribute on a heading.</p>
//       <p>Use a <code>md-dialog-content</code> element for content.</p>
//       <p>Place actions in an <code>md-dialog-actions</code> element.</p>
//     </md-dialog-content>
//     <md-dialog-actions layout="row" layout-align="end center">
//     <!--
//       <button md-buttonmd-dialog-close color="accent" >Grabar</button> 
//       <button md-buttonmd-dialog-close>Salir</button> 
//     -->
//   <button type="button" md-raised-button color="accent" 
//             (click)="dialogRef.close('Grabar')">Grabar</button>
//         <button type="button" md-button 
//             (click)="dialogRef.close('Salir')">Salir</button>    

//     </md-dialog-actions>

//   `,
// })
// export class DialogResultExampleDialog {
//   constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {}
// }