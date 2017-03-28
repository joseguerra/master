import { NgModule, Type } from '@angular/core';
import { BrowserModule, Title }  from '@angular/platform-browser';

import { MdDialogModule } from '@angular/material';

import { CovalentCoreModule , CovalentExpansionPanelModule, CovalentStepsModule } from '@covalent/core';
import { CovalentHttpModule, IHttpInterceptor } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentChartsModule } from '@covalent/charts';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { UsersFormComponent } from './users/+form/form.component';
import { LogsComponent } from './logs/logs.component';
import { FormComponent } from './form/form.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { DashboardProductComponent } from './dashboard-product/dashboard-product.component';
import { ProductOverviewComponent } from './dashboard-product/overview/overview.component';
import { ProductStatsComponent } from './dashboard-product/stats/stats.component';
import { ProductFeaturesComponent } from './dashboard-product/features/features.component';
import { FeaturesFormComponent } from './dashboard-product/features/+form/form.component';
import { appRoutes, appRoutingProviders } from './app.routes';

import { ControlProduccion } from './control-produccion/control-produccion.component';
import { OrdenServicioComponent ,  } from './control-produccion/orden-servicio/orden-servicio.component';
import { OrdenServicioCrudComponent } from './control-produccion/orden-servicio/orden-servicio-crud/orden-servicio-crud.component';
import { OrdenServicioDialogComponent } from './control-produccion/orden-servicio/orden-servicio-crud/orden-servicio-dialog/orden-servicio-dialog.component';  

import { ChartComponent } from '../components/chart/chart.component';

import { RequestInterceptor } from '../config/interceptors/request.interceptor';

import {DataTableModule,SharedModule, CalendarModule, DialogModule} from 'primeng/primeng';
import { PintadoComponent } from './control-produccion/orden-servicio/pintado/pintado.component';
import { PintadoCrudComponent } from './control-produccion/orden-servicio/pintado/pintado-crud/pintado-crud.component';

const httpInterceptorProviders: Type<IHttpInterceptor>[] = [
  RequestInterceptor,
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashboardComponent,
    DashboardProductComponent,
    ProductOverviewComponent,
    ProductStatsComponent,
    ProductFeaturesComponent,
    FeaturesFormComponent,
    UsersComponent,
    UsersFormComponent,
    LogsComponent,
    FormComponent,
    DetailComponent,
    LoginComponent,
    ChartComponent,
    ControlProduccion,
    OrdenServicioComponent,
    OrdenServicioDialogComponent,
    OrdenServicioCrudComponent,
    PintadoComponent,
    OrdenServicioDialogComponent,
    PintadoCrudComponent
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    BrowserModule,
    CovalentCoreModule.forRoot(),
    CovalentChartsModule.forRoot(),
    CovalentHttpModule.forRoot({
      inteceptors: [{
        interceptor: RequestInterceptor, paths: ['**'],
      }],
    }),
    CovalentHighlightModule.forRoot(),
    CovalentMarkdownModule.forRoot(),
    CovalentExpansionPanelModule.forRoot(),
    CovalentStepsModule.forRoot(),
    appRoutes,
    DataTableModule,
    SharedModule,
    CalendarModule,
    DialogModule,
    MdDialogModule
  ], // modules needed to run this module
  providers: [
    appRoutingProviders,
    httpInterceptorProviders,
    Title,
  ], // additional providers needed for this module
  entryComponents: [ OrdenServicioDialogComponent],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
