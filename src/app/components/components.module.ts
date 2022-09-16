import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { ItemPlatoComponent } from './item-plato/item-plato.component';
import { FooterComponent } from './footer/footer.component';
import { BarraRedesSocialesComponent } from './barra-redes-sociales/barra-redes-sociales.component';
import { BarraTituloComponent } from './barra-titulo/barra-titulo.component';
import { ItemPlatoFotoComponent } from './item-plato-foto/item-plato-foto.component';
import { GalleryModalComponent } from './gallery-modal/gallery-modal.component';
import { ItemVinacotecaComponent } from './item-vinacoteca/item-vinacoteca.component';
import { ReservaModalComponent } from './reserva-modal/reserva-modal.component';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    BarraRedesSocialesComponent,
    BarraTituloComponent,
    FooterComponent,
    GalleryModalComponent,
    ItemPlatoComponent,
    ItemPlatoFotoComponent,
    ItemVinacotecaComponent,
    ReservaModalComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  exports: [
    BarraRedesSocialesComponent,
    BarraTituloComponent,
    FooterComponent,
    GalleryModalComponent,
    ItemPlatoComponent,
    ItemPlatoFotoComponent,
    ItemVinacotecaComponent,
    ReservaModalComponent,
    ToolbarComponent,
  ]
})
export class ComponentsModule { }
