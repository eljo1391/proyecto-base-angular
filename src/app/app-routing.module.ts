import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TablaBasicComponent } from './components/tabla-basic/tabla-basic.component';
import { TipoProducto } from './components/tipo-producto/tipo-producto.component';


const routes: Routes = [
  {
    path: '', data: { title: 'Dashboard' },
    children: [
      { path: '', component: DashboardComponent, data: { title: 'Dashboard-Componente' } },
      { path: 'tipo-producto', component: TipoProducto, data: { title: 'Tipo Producto' } },
      { path: 'data-table', component: TablaBasicComponent, data: { title: 'Ejemplo de Table' } },

    ]
  },





  {
    path: '**',
    redirectTo: '',
  },
  //{path:'/new', component:NewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
