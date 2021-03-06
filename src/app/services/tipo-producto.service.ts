import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TipoProductoModel } from '../components/tipo-producto/model/tipo-producto';
@Injectable({
  providedIn: 'root'
})
export class TipoProductoService {
  recurosBaseURL: string ="http://127.0.0.1:8084/api/"//"../../assets/data/tipo-producto.json" //environment.URL_BASE + '/areas/';
  constructor(private http: HttpClient) {
    console.log(environment);    
   }


   public selectTipoProducto: TipoProductoModel ={
     tipoProductoId: null,
     codigo: '',
     descripcion: ''
   };

 /*  agregarRecurso(recurso){
    return this.http.post(this.recurosBaseURL, recurso).map(r => r);
  }
  modificarRecurso(recurso,id){
    return this.http.put(this.recurosBaseURL+id, recurso).map(r => r);
  }
  eliminarRecurso(id){
    return this.http.delete(this.recurosBaseURL + id).map( r=> r)
  }
  obtenerRecurso(id){
    return this.http.get(this.recurosBaseURL+id, ).map(r => r);

  } */
  listarRecurso(){
    return this.http.get(this.recurosBaseURL+'tipos-producto/listar')
               .pipe( 
                 map((r:any) => {
                   let respuesta = {
                     lista:[]
                   }
                   console.log(r);
                   return r;
                 
                 })
                );
  }

  agregarRecurso(recurso){
    return this.http.post(this.recurosBaseURL+'tipos-producto/agregar', recurso).pipe(map((r:any) => r));
  }

  modificarRecurso(producto: TipoProductoModel){
    const url = this.recurosBaseURL+`tipos-producto/modificar/${producto.tipoProductoId}`;
    return this.http.put(url, producto ).pipe(map((r:any) => r));
  }

  obtenerRecurso(id){
    return this.http.get(this.recurosBaseURL+'tipos-producto/encontrar/'+id ).pipe(map((r:any) => JSON.stringify(r)));
  }

  eliminarRecurso(id){
    return this.http.delete(this.recurosBaseURL+'tipos-producto/eliminar/' + id).pipe(map((r:any) => r));
  } 
}
