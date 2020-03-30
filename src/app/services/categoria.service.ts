import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CategoriaModel } from '../components/categorias/model/categoria';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  recurosBaseURL: string ="http://127.0.0.1:8084/api/"//"../../assets/data/tipo-producto.json" //environment.URL_BASE + '/areas/';
  constructor(private http: HttpClient) {
    console.log(environment);    
   }


   public selectCategoria: CategoriaModel ={
     categoriaId: null,
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
    return this.http.get(this.recurosBaseURL+'categoria/listar')
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
    return this.http.post(this.recurosBaseURL+'categoria/agregar', recurso).pipe(map((r:any) => r));
  }

  modificarRecurso(categoria: CategoriaModel){
    const url = this.recurosBaseURL+`categoria/modificar/${categoria.categoriaId}`;
    return this.http.put(url, categoria ).pipe(map((r:any) => r));
  }

  obtenerRecurso(id){
    return this.http.get(this.recurosBaseURL+'categoria/encontrar/'+id ).pipe(map((r:any) => JSON.stringify(r)));
  }

  eliminarRecurso(id){
    return this.http.delete(this.recurosBaseURL+'categoria/eliminar/' + id).pipe(map((r:any) => r));
  } 
}
