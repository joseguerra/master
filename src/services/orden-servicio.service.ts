import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpInterceptorService } from '@covalent/http';
import { environment } from '../environments/environment';

import { IOrdenServicio } from '../app/control-produccion/orden-servicio/orden-servicio';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class OrdenServicioService {

  constructor(private _http: HttpInterceptorService) {}

   // Preventivo
   queryFechasPRE(fecini:string, fecfin:string): Observable<IOrdenServicio[]> {
      return this._http.get(environment.backEndServer + '/api/v1/lstosconpro2_getFechas/PRE/'+fecini+'/'+fecfin)
                    .map((res:Response) => res.json())
                         //...errors if any
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
                    // .map(this.extractData)
                    // .catch(this.handleError);
    }

   // Planchado
   queryFechasPLA(fecini:string, fecfin:string): Observable<IOrdenServicio[]> {
      return this._http.get(environment.backEndServer + '/api/v1/lstosconpro2_getFechas/PLA/'+fecini+'/'+fecfin)
                    .map((res:Response) => res.json())
                         //...errors if any
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
                    // .map(this.extractData)
                    // .catch(this.handleError);
    }

   // Pintura
   queryFechasPIN(fecini:string, fecfin:string): Observable<IOrdenServicio[]> {
      return this._http.get(environment.backEndServer + '/api/v1/lstosconpro2_getFechas/PIN/'+fecini+'/'+fecfin)
                    .map((res:Response) => res.json())
                         //...errors if any
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
                    // .map(this.extractData)
                    // .catch(this.handleError);
    }

   queryCodigo(codigo:string): Observable<IOrdenServicio[]> {
      return this._http.get(environment.backEndServer + '/api/v1/lstosconpro2_getCodigo/'+codigo)
                    .map((res:Response) => res.json())
                         //...errors if any
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
                    // .map(this.extractData)
                    // .catch(this.handleError);
    }

  // query(): any {
  //  return this._http.get(environment.backEndServer + '/api/v1/lstosconpro2_get')
  //  .map((res: Response) => {
  //    return res.json();
  //  });
  // }

  // get(id: string): any {
  //  return this._http.get('data/products.json')
  //  .map((res: Response) => {
  //    let item: any;
  //    res.json().forEach((s: any) => {
  //      if (s.item_id === id) {
  //        item = s;
  //      }
  //    });
  //    return item;
  //  });
  // }
}