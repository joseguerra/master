import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpInterceptorService } from '@covalent/http';
import { environment } from '../environments/environment';

import { IRazonDetenido }  from '../interfaces/generales.interface'
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class GeneralesService {

  constructor(private _http: HttpInterceptorService) {}

   queryRazonDetenidoAll(): Observable<IRazonDetenido[]> {
      return this._http.get(environment.backEndServer + '/api/v1/razondetenido_getAll')
                    .map((res:Response) => res.json())
                         //...errors if any
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
                    // .map(this.extractData)
                    // .catch(this.handleError);
    }

}