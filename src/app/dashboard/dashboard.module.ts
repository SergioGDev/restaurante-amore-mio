import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../material/material.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { ConfiguracionMenuComponent } from './configuracion-menu/configuracion-menu.component';
import { ConfiguracionVinacotecaComponent } from './configuracion-vinacoteca/configuracion-vinacoteca.component';
import { ConfiguracionGaleriaComponent } from './configuracion-galeria/configuracion-galeria.component';
import { ConfiguracionContactoComponent } from './configuracion-contacto/configuracion-contacto.component';
import { ConfiguracionInicioComponent } from './configuracion-inicio/configuracion-inicio.component';
import { AnnadirSeccionComponent } from './configuracion-menu/annadir-seccion/annadir-seccion.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MenuLateralComponent,
    ConfiguracionMenuComponent,
    ConfiguracionVinacotecaComponent,
    ConfiguracionGaleriaComponent,
    ConfiguracionContactoComponent,
    ConfiguracionInicioComponent,
    AnnadirSeccionComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
