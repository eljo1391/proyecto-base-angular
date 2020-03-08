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
              id:'cliente',
              subModulo : 'Clientes',
              iconoSubModulo: 'fas fa-user',
              subItems: [
                {
                  url:'',
                  icono:'fas fa-user',
                  titulo:'Agregar Cliente'
                },
                {
                  url:'',
                  icono:'fas fa-address-card',
                  titulo:'Modificar Cliente'
                },
                {
                  url:'',
                  icono:'fas fa-user-friends',
                  titulo:'Listar Clientes'
                }
              ]
          },
        ]
      },
   
      {
        modulo:'Servicios',
        moduloItems: [
          {
              id:'submodulo2',
              subModulo : 'SubModulo2',
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
          {
            id:'submodulo3',
            iconoSubModulo:'fas fa-adjust',
            subModulo : 'SubModulo3',
            subItems: [
              {
                url:'',
                icono:'address-card',
                titulo:'Tipo Producto'
              },
              {
                url:'',
                icono:'address-card',
                titulo:'Tipo Documento'
              },
              {
                url:'',
                icono:'address-card',
                titulo:'Categorias'
              }
            ]
          }

        ]
      },
      {
        modulo:'modulon',
        moduloItems: [
          {
              id:'modulon',
              iconoSubModulo:'fas fa-align-center',
              subModulo : 'Modulo N',
              subItems: [
                {
                  url:'',
                  icono:'address-card',
                  titulo:'Agregar Cliente'
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