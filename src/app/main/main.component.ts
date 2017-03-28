import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'qs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {

routes: Object[] = [{
      title: 'Estadisticas',
      route: '/',
      icon: 'dashboard',
    }, {
      title: 'Control de produccion',
      route: '/controlp',
      icon: 'view_quilt',
    }, {
      title: 'Estadisticas de Servicios',
      route: '/product',
      icon: 'view_quilt',
    }, {
      title: 'Supervicion de Servicios',
      route: '/logs',
      icon: 'receipt',
    }, {
      title: 'Administracion  de Usuarios',
      route: '/users',
      icon: 'people',
    },
  ];

  // routes: Object[] = [{
  //     title: 'Dashboard',
  //     route: '/',
  //     icon: 'dashboard',
  //   }, {
  //     title: 'Product Dashboard',
  //     route: '/product',
  //     icon: 'view_quilt',
  //   }, {
  //     title: 'Product Logs',
  //     route: '/logs',
  //     icon: 'receipt',
  //   }, {
  //     title: 'Manage Users',
  //     route: '/users',
  //     icon: 'people',
  //   },
  // ];

  constructor(private _router: Router) {}

  logout(): void {
    this._router.navigate(['/login']);
  }
}
