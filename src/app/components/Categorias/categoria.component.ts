import { Component, OnInit, ViewChildren, QueryList, Input } from '@angular/core';
import { SortableHeader, SortEvent } from 'src/app/directives/sortable.directive';
import { Observable } from 'rxjs';
import { CategoriaService } from 'src/app/services/categoria.service';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CategoriaModel } from './model/categoria';


@Component({
  selector: 'categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
  providers: [CategoriaService]
})
export class CategoriaComponent implements OnInit {
  public band;
  public categoria;


  form = this.fb.group({
    codigo: ['', Validators.required],
    descripcion: ['', Validators.required]
  });

  constructor(
    private service: CategoriaService, 
    private fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute
       
    ) 
    {
     // this.t_producto = new TipoProductoModel('','','');
      
      this.form = this.fb.group({
        codigo: ['', Validators.required],
        descripcion: ['', Validators.required]
      });
    }

  

  ngOnInit() {
    this.buscar();
    console.log('buscado');
    //this.encontrar()
  }

  buscar(){
    
    const params ={
        filtros: JSON.stringify({})
    }    
    this.service.listarRecurso().subscribe( (res:any) =>{
      this.categoria = res;
      console.log(res);//total$);
    });
    
  }
  cargarPagina(page){
    console.log(page);
  }

  acciones(data,e){
    console.log(data , e);

  }

  crear(){
    console.log('creado');
    console.log(this.form.value);
    this.service.agregarRecurso(this.form.value)
    .subscribe((result: any) => {
     this.buscar();
    });
  }

  modificar(id){
    
    this.service.modificarRecurso(this.form.value).subscribe((res:any) => {
      this.buscar();
    })
  }

  encontrar(t : CategoriaModel){
    this.service.selectCategoria = Object.assign({}, t);
  }

  borrar(id){
    this.service.eliminarRecurso(id).subscribe((res:any) => {
      console.log('elemento eliminado');
      this.buscar();
    });
    
  }

  resetForm(myForm?: NgForm){
    this.service.selectCategoria = {
      categoriaId: null,
      codigo:'',
      descripcion:''
    };
  }

}
