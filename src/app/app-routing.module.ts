import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TablaBasicComponent } from './components/tabla-basic/tabla-basic.component';
import { TipoProductoComponent } from 'src/app/components/tipo-producto/tipo-producto.component';
import { CategoriaComponent } from './components/Categorias/categoria.component';



const routes: Routes = [
  {
    path: '', data: { title: 'Dashboard' },
    children: [
      { path: '', component: DashboardComponent, data: { title: 'Dashboard-Componente' } },
      { path: 'tipo-producto', component: TipoProductoComponent, data: { title: 'Tipo Producto' } },
      { path: 'categorias', component: CategoriaComponent, data: { title: 'Categorias de Productos' } },
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
