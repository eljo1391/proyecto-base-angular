import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms'
import { Location } from '@angular/common'
import { CategoriaService } from 'src/app/services/categoria.service';

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
        }else{
            //actualizar
            this.service.modificarRecurso(myForm.value).subscribe(res => location.reload());
        }
    }
}