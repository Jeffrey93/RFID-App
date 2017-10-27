import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable'
import { Headers, RequestOptions } from '@angular/http';


@Injectable()
export class TareasProvider {
    private urlEstado = "http://localhost:3000/tareas?idEstado=";
    private urlTareas= "http://localhost:3000/tareas/";

  constructor(public http: Http) {
   
  }


   
  getAllTareas()
  {
    return this.http.get(this.urlTareas)
    .do(this.logResponse)
    .map(this.extraerDatos)
    .catch(this.catchError)
  }
    getTareaById(tareaId)
  {
    return this.http.get(this.urlTareas+tareaId)
    .do(this.logResponse)
    .map(this.extraerDatos)
    .catch(this.catchError)
  }
  getTareas(tareaId)
  {
    return this.http.get(this.urlEstado+tareaId)
    .do(this.logResponse)
    .map(this.extraerDatos)
    .catch(this.catchError)
  }

   putTareas(tareaId,tarea)
  {
    console.log(tarea);  
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.urlTareas+tareaId, tarea, options )
    .do(this.logResponse)
    .map(this.extraerDatos)
    .catch(this.catchError)
  }

  postTareas(tarea)
  {
    console.log(tarea);  
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.urlTareas, tarea, options )
    .do(this.logResponse)
    .map(this.extraerDatos)
    .catch(this.catchError)
  }

/*  updateTareaId(tareaId)
  {
    return this.http.get("http://bukin.es/backend/reservAPI/usuario/"+ tareaId)
    .map(res => res.json())
    
  }*/
  
 

  private catchError (error : Response | any){
    console.log(error);
    return Observable.throw (error.json().error || "Error en el servidor");
    
  }

  private logResponse (res: Response){
    console.log(res)
  }

  private extraerDatos (res: Response){
    return res.json ();
  }
  
}
