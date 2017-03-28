import { IOrdenServicio } from './../../orden-servicio';
import { MdDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenServicioService } from './../../../../../services/orden-servicio.service';
import { Component, AfterViewInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
// import { DataTableModule, SharedModule } from 'primeng/primeng';
import { StepState, TdLoadingService } from '@covalent/core';

@Component({
  selector: 'app-pintado-crud',
  templateUrl: './pintado-crud.component.html',
  styleUrls: ['./pintado-crud.component.scss'],
  viewProviders: [ OrdenServicioService ],
})
export class PintadoCrudComponent implements AfterViewInit {

  // active: boolean = false;
  active: boolean = true;
  // disabled: boolean = false;
  state: StepState = StepState.Required; // or state: string = "required";

data1: any[] = [
      {
        'descripcion' : 'Lavado ',
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
      },
       {
        'descripcion' : 'Lijado de superficie',
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
      },
        {
        'descripcion' : 'Desengrasado',
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
      },
      {
        'descripcion' : 'Masillado',
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
      },
        {
        'descripcion' : 'Secado de masillado',
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
      },
      {
        'descripcion' : 'Remasillado (2 veces)',
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
      },
      {
        'descripcion' : 'Secado de remasillado ( 2 veces )',
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
      },
       {
        'descripcion' : 'Lijado de remasillado',
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
       },
       {
        'descripcion' : 'Desengrasado',
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
  ]




data2: any[] = [
      {
        'descripcion' : 'Enmascarado ',
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
      },
       {
        'descripcion' : 'Aplicación Etching Primer 1ra. Mano (2 veces)',
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
      },
        {
        'descripcion' : 'Secado entre pasadas (2 veces)',
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
      },
      {
        'descripcion' : 'Secado para lijar o recubrir (2 veces)',
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
      },
        {
        'descripcion' : 'Aplicación Spectra Primer 2da. Mano (3 veces)',
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
      },
      {
        'descripcion' : 'Secado entre pasadas (3 veces)',
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
      },
      {
        'descripcion' : 'Secado para lijar o recubrir (3 veces)',
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
      },
       {
        'descripcion' : 'Aplicación y secado Control de lijado',
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
       },
       {
        'descripcion' : 'Proceso de Lijado ',
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
  ]

  codigo: string;
  ordenServicios: IOrdenServicio[];

  nombre: string;
  codcliente: string;
  vchdireccion: string;
  placa: string;
  carro: string;
  colores: string;
  anio: string

  constructor(private _titleService: Title,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MdDialog,
              private ordenServicioService: OrdenServicioService,
              private _loadingService: TdLoadingService
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
        for( var i in data)
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

  Star(): void{
    console.log('prueba Inicio')
    alert('prueba Inicio');
  }

  Pausa(): void{
    console.log('prueba Pausa ')
    alert('prueba Pausa');
  }

  Stop(): void{
    console.log('prueba Stop ')
    alert('prueba stop');
  }
  expandedEvent(): void {

  }

  collapsedEvent(): void {
  }

  activeDeactiveStep1Msg: string = 'No select/deselect detected yet';
  stateStep2: StepState = StepState.Required;
  stateStep3: StepState = StepState.Complete;
  stateStep4: StepState = StepState.Complete;
  stateStep5: StepState = StepState.Complete;
  disabled: boolean = false;


  toggleRequiredStep2(): void {
    this.stateStep2 = (this.stateStep2 === StepState.Required ? StepState.None : StepState.Required);
  }
  toggleCompleteStep3(): void {
    this.stateStep3 = (this.stateStep3 === StepState.Complete ? StepState.None : StepState.Complete);
  }
  toggleCompleteStep4(): void {
    this.stateStep4 = (this.stateStep4 === StepState.Complete ? StepState.None : StepState.Complete);
  }
  toggleCompleteStep5(): void {
    this.stateStep5 = (this.stateStep5 === StepState.Complete ? StepState.None : StepState.Complete);
  }
  activeStep1Event(): void {
    this.activeDeactiveStep1Msg = 'Active event emitted.';
  }


  deactiveStep1Event(): void {
    this.activeDeactiveStep1Msg = 'Deactive event emitted.';
  }
  activeStep2Event(): void {
    this.activeDeactiveStep1Msg = 'Active event emitted.';
  }
  deactiveStep2Event(): void {
    this.activeDeactiveStep1Msg = 'Deactive event emitted.';
  }
  activeStep3Event(): void {
    this.activeDeactiveStep1Msg = 'Active event emitted.';
  }
  deactiveStep3Event(): void {
    this.activeDeactiveStep1Msg = 'Deactive event emitted.';
  }
  activeStep4Event(): void {
    this.activeDeactiveStep1Msg = 'Active event emitted.';
  }
  deactiveStep4Event(): void {
    this.activeDeactiveStep1Msg = 'Deactive event emitted.';
  }

}
