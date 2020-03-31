import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TipoProductoComponent } from 'src/app/components/tipo-producto/tipo-producto.component';
import { CategoriaComponent } from './components/parametricos/Categorias/categoria.component';



const routes: Routes = [
  {
    path: '', data: { title: 'Dashboard' },
    children: [
      { path: '', component: DashboardComponent, data: { title: 'Dashboard-Componente' } },
      { path: 'tipo-producto', component: TipoProductoComponent, data: { title: 'Tipo Producto' } },
      { path: 'categorias', component: CategoriaComponent, data: { title: 'Categorias de Servicios' } }

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
