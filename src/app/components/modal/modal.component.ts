import {Component, OnInit} from '@angular/core';
import { TipoProductoService } from '../../services/tipo-producto.service';
import {NgForm} from '@angular/forms'
import { Location } from '@angular/common'

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']

})

export class ModalComponent implements OnInit {
    
    constructor(
        public service: TipoProductoService, 
        private location : Location
    ){}

    ngOnInit() {

    }

    guardar(myForm: NgForm){
        if (myForm.value.tipoProductoId == null){
            //guardar
            this.service.agregarRecurso(myForm.value).subscribe(res => location.reload())
        }else{
            //actualizar
            this.service.modificarRecurso(myForm.value).subscribe(res => location.reload());
        }
    }
}