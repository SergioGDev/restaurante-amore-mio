import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AvisoLegalComponent } from '../public/pages/aviso-legal/aviso-legal.component';
import { ContactoComponent } from '../public/pages/contacto/contacto.component';
import { GaleriaComponent } from '../public/pages/galeria/galeria.component';
import { InicioComponent } from '../public/pages/inicio/inicio.component';
import { MenuComponent } from '../public/pages/menu/menu.component';
import { PoliticaCookiesComponent } from '../public/pages/politica-cookies/politica-cookies.component';
import { PoliticaPrivacidadComponent } from '../public/pages/politica-privacidad/politica-privacidad.component';
import { VinacotecaComponent } from '../public/pages/vinacoteca/vinacoteca.component';

import { MaterialModule } from '../material/material.module';
import { ComponentsModule } from '../components/components.module';
import { AppRoutingModule } from '../app-routing.module';
import { PublicRoutingModule } from './public-routing.module';

@NgModule({
  declarations: [
    InicioComponent,
    ContactoComponent,
    MenuComponent,
    GaleriaComponent,
    VinacotecaComponent,
    AvisoLegalComponent,
    PoliticaPrivacidadComponent,
    PoliticaCookiesComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    PublicRoutingModule
  ],
  exports: [
    InicioComponent,
    ContactoComponent,
    MenuComponent,
    GaleriaComponent,
    VinacotecaComponent,
    AvisoLegalComponent,
    PoliticaPrivacidadComponent,
    PoliticaCookiesComponent,
  ]
})
export class PublicModule { }
