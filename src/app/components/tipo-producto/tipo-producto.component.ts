import { Component, OnInit, ViewChildren, QueryList, Input } from '@angular/core';
import { SortableHeader, SortEvent } from 'src/app/directives/sortable.directive';
import { Observable } from 'rxjs';
import { TipoProductoService } from 'src/app/services/tipo-producto.service';
import { TipoProductoModel } from 'src/app/components/tipo-producto/model/tipo-producto';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'tipo-producto',
  templateUrl: './tipo-producto.component.html',
  styleUrls: ['./tipo-producto.component.scss'],
  providers: [TipoProductoService]
})
export class TipoProductoComponent implements OnInit {
  
  public band;
  public t_producto;


  form = this.fb.group({
    codigo: ['', Validators.required],
    descripcion: ['', Validators.required]
  });

  constructor(
    private service: TipoProductoService, 
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
      this.t_producto = res;
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

  encontrar(t : TipoProductoModel){
    this.service.selectTipoProducto = Object.assign({}, t);
  }

  borrar(id){
    this.service.eliminarRecurso(id).subscribe((res:any) => {
      console.log('elemento eliminado');
      this.buscar();
    });
    
  }

  resetForm(myForm?: NgForm){
    this.service.selectTipoProducto = {
      tipoProductoId: null,
      codigo:'',
      descripcion:''
    };
  }

}
