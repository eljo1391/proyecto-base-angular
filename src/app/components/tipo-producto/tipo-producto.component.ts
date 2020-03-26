import { Component, OnInit, ViewChildren, QueryList, Input } from '@angular/core';
import { SortableHeader, SortEvent } from 'src/app/directives/sortable.directive';
import { Observable } from 'rxjs';
import { TipoProductoService } from 'src/app/services/tipo-producto.service';

@Component({
  selector: 'tipo-producto',
  templateUrl: './tipo-producto.component.html',
  styleUrls: ['./tipo-producto.component.scss']
})
export class TipoProducto implements OnInit {


  @ViewChildren(SortableHeader) headers: QueryList<SortableHeader>;

  data$:any[];
  @Input('total$')
  total$: number=0;
  @Input('pageSize')
  pageSize: number =5;

  @Input('page')
  page: number=1;
  column: string="codigo"
  direction: string ="ASC"
  previousPage: any;


  definicionDecolumnas =[
    {
      nombre: '',
    }
  ]

  constructor(private service: TipoProductoService) { }

  ngOnInit() {
    this.buscar();
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
      this.column = column;
      this.direction = direction;
    });
    this.buscar();
  }
  buscar(){
    const params ={
      cantidad: this.pageSize,
      pagina: this.page,
      sortBy: this.column,
      sortOrder: this.direction,
      filtros: JSON.stringify({})
    }    
    this.service.listarRecurso(params).subscribe( (res:any) =>{

        this.data$ = res;
        this.total$ = 10;
        this.page = 1;
        

      console.log(this.data$);//total$);
    });
    
  }
  cargarPagina(page){
    console.log(page);

    if (page !== this.previousPage) {
      this.previousPage = page;
      this.buscar();
    }
  }

  acciones(data,e){
    console.log(data , e);

  }

}
