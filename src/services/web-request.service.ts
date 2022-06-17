import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
  readonly mainURL =`/${environment.apiURL} `;

  constructor(private http:HttpClient) { }

  //ESTOS SON NUESTROS METODOS PARA PODER HACER LA HTTP REQUESTS, POR QUE ESOS NOMBRES?
  //SON LOS NOMBRES QUE EN EL POSTMAN TE ENSE;A QUE SON LAS REQUESTS
  //PODEMOS PONERLES NOMBRES PROPIOS? SI, PERO ESE SE HACE DESDE EL CONTROLADOR DONDE ESTAMOS LLAMANDO A ESTAS FUNCIONES
  //OSEA QUE ESTE ARCHVIO ES SOLAMENTE PARA QUE JALE EL ENRUTAMIENTO, YA EN EL TASKS.SERVICE ESTAMOS LLAMANDO DIFERENTE A NUESTROS
  //METODOS PARA PODER HACERLOS JALAR BIEN
  //POR ENDE, ROOT_URL INDICA LA DIRECCION QUE SIEMPRE VA A SEGUIR EL URL DE LA PAGINA
  //Y EL URI ES UN STRING QUE ESTA PREPARADO PARA RECIBIR UN STRING QUE TRAIGA LO QUE SEA, EN ESTE CASO QUE ES?
  //EL URL QUE ESTAN EN NUESTROS METODOS EN EL BACK END 
  //app.get('/lists/:listId/tasks/:taskId' POR EJEMPLO

  get(uri: string) {
    return this.http.get(`${this.mainURL}/${uri}`);
  }

  post(uri: string, payload: Object) {
    return this.http.post(`${this.mainURL}/${uri}`, payload);
  }

  patch(uri: string, payload: Object) {
    return this.http.patch(`${this.mainURL}/${uri}`, payload);
  }

  delete(uri: string) {
    return this.http.delete(`${this.mainURL}/${uri}`);
  }
}
