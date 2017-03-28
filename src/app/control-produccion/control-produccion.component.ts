import { Component, AfterViewInit } from '@angular/core';

import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'dashboard-product',
  templateUrl: './control-produccion.component.html',
  styleUrls: ['./control-produccion.component.scss'],
})
export class ControlProduccion implements AfterViewInit {

  title: string;
  constructor(private _titleService: Title) { }

  ngAfterViewInit(): void {
    this._titleService.setTitle( 'Control de produccion' );
    this.title = this._titleService.getTitle();
  }
}
