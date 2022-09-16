import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SeccionMenuSchema } from '../interfaces/restaurante.interface';

@Injectable({
  providedIn: 'root'
})
export class SeccionesMenuService {

  seccionesUrl: string = 'api/seccion-menu';

  constructor(private http: HttpClient) { }

  getListadoSeciones(): Observable<any> {
    return this.http.get<any>(`${environment.backendUrl}/${this.seccionesUrl}`);
  }

  guardarNuevaSeccion(seccion: SeccionMenuSchema) {
    return this.http.post<any>(`${environment.backendUrl}/${this.seccionesUrl}`, seccion);
  }

}
