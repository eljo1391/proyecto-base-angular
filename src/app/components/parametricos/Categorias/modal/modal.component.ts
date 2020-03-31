import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms'
import { Location } from '@angular/common'
import { CategoriaService } from 'src/app/services/categoria.service';
import Swal from 'sweetalert2';
import { timer } from 'rxjs';


@Component({
    selector: 'categoria-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']

})

export class ModalCategoriaComponent implements OnInit {
    
    constructor(
        public service: CategoriaService, 
        private location : Location
    ){}

    ngOnInit() {

    }

    guardar(myForm: NgForm){
        if (myForm.value.categoriaId == null){
            //guardar
            this.service.agregarRecurso(myForm.value).subscribe(res => location.reload())
            this.showModal();
        }else{
            //actualizar
           this.service.modificarRecurso(myForm.value).subscribe(res => location.reload());
           this.showModal();
        }
    }
    showModal(){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se han guardado los cambios correctamente',
            showConfirmButton: false,
            timer: 200000000
      })
}
}