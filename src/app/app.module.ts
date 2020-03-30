import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { BreadcrumsComponent } from './shared/breadcrums/breadcrums.component';
import { FormsBasicComponent } from './components/forms-basic/forms-basic.component';
import { TablaBasicComponent } from './components/tabla-basic/tabla-basic.component';
import { TipoProductoComponent } from 'src/app/components/tipo-producto/tipo-producto.component';
import { CategoriaComponent } from 'src/app/components/Categorias/categoria.component';
import { SortableHeader } from './directives/sortable.directive';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';
import { ModalCategoriaComponent } from './components/Categorias/modal/modal.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    BreadcrumsComponent,
    FormsBasicComponent,
    TablaBasicComponent,
    SortableHeader,
    TipoProductoComponent,
    ModalComponent,
    CategoriaComponent,
    ModalCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
