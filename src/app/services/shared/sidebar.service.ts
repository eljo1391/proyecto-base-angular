import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu =[];
  constructor() {
    this.menu =[
      {
        modulo:'Parametricos',
        iconoSubModulo:'address-book',
        moduloItems: [
          {
              id:'forms',
              subModulo : 'Reservas',
              iconoSubModulo: 'fas fa-user',
              subItems: [
                {
                  url:'/forms',
                  icono:'fas fa-user',
                  titulo:'Form'
                },
                {
                  url:'/data-table',
                  icono:'fas fa-address-card',
                  titulo:'Table'
                },
              ]
          },
          {
            id:'forms',
            subModulo : 'Productos',
            iconoSubModulo: 'fas fa-user',
            subItems: [
              {
                url:'/forms',
                icono:'fas fa-user',
                titulo:'Form'
              },
              {
                url:'/data-table',
                icono:'fas fa-address-card',
                titulo:'Table'
              },
            ]
        },
        ]
      },
   
      {
        modulo:'Servicios',
        moduloItems: [
          {
              id:'submodulo2',
              subModulo : 'Cobranzas',
              iconoSubModulo:'fas fa-ad',
              subItems: [
                {
                  url:'',
                  icono:'fas fa-ad',
                  titulo:'Tipo Producto'
                },
                {
                  url:'',
                  icono:'fas fa-alipay',
                  titulo:'Tipo Documento'
                },
                {
                  url:'',
                  icono:'fas fa-angle-double-left',
                  titulo:'Categorias'
                }
              ]
          },
          
        ]
      },
      {
        modulo:'Otros',
        moduloItems: [
          {
              id:'modulon',
              iconoSubModulo:'fas fa-align-center',
              subModulo : 'Configuraciones',
              subItems: [
                {
                  url:'tipo-producto',
                  icono:'fas fa-angle-double-left',
                  titulo:'Tipos Producto'
                },
                {
                  url:'',
                  icono:'fas fa-alipay',
                  titulo:'Medios de Pago'
                },
                {
                  url:'categorias',
                  icono:'fas fa-angle-double-left',
                  titulo:'Categorias'
                }
              ]
          }

        ]
      },
    ];
   }
   obtenerSideBar(){
     return this.menu;
   }
}
