import { PintadoCrudComponent } from './control-produccion/orden-servicio/pintado/pintado-crud/pintado-crud.component';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardProductComponent } from './dashboard-product/dashboard-product.component';
import { ProductOverviewComponent } from './dashboard-product/overview/overview.component';
import { ProductStatsComponent } from './dashboard-product/stats/stats.component';
import { ProductFeaturesComponent } from './dashboard-product/features/features.component';
import { FeaturesFormComponent } from './dashboard-product/features/+form/form.component';
import { UsersComponent } from './users/users.component';
import { UsersFormComponent } from './users/+form/form.component';
import { LogsComponent } from './logs/logs.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';

import { ControlProduccion } from './control-produccion/control-produccion.component';
import { OrdenServicioComponent } from './control-produccion/orden-servicio/orden-servicio.component';
import { OrdenServicioCrudComponent } from './control-produccion/orden-servicio/orden-servicio-crud/orden-servicio-crud.component';

import { PintadoComponent } from './control-produccion/orden-servicio/pintado/pintado.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: MainComponent, children: [{
      component: DashboardComponent,
      path: '',
    },
    {path: 'controlp', component: ControlProduccion , children: [
      {path: '', component: OrdenServicioComponent },
      // {path: 'ordenservicio', component: OrdenServicioComponent},
      {path: 'ordenservicio', children: [
        {path: '', component: OrdenServicioComponent},
        {path: ':id/edit', component: OrdenServicioCrudComponent},
      ]},
      {path: 'ordenserviciocrud', component: OrdenServicioCrudComponent},

      {path: 'pintado', children: [
        {path: '', component: PintadoComponent},
        {path: ':id/edit', component: PintadoCrudComponent},
      ]},


    ]},
    {path: 'product', component: DashboardProductComponent, children: [
      {path: '', component: ProductOverviewComponent},
      {path: 'ordenservicio', component: ProductStatsComponent},
      {path: 'ordenserviciocrud', children: [
        {path: '', component: OrdenServicioCrudComponent},
        // {path: 'add', component: OrdenServicioCrud},
        // {path: ':id/delete', component: OrdenServicioCrud},
        {path: ':id/edit', component: OrdenServicioCrudComponent},
      ]},
    ]},
    {path: 'item/:id', component: DetailComponent},
    {path: 'logs', component: LogsComponent},
    {path: 'form', component: FormComponent},
    {path: 'users', children: [
      {path: '', component: UsersComponent},
      {path: 'add', component: UsersFormComponent},
      {path: ':id/delete', component: UsersFormComponent},
      {path: ':id/edit', component: UsersFormComponent},
    ]},
  ]},
];


export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, { useHash: true });
