import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MenuComponent } from './pages/menu/menu.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { VinacotecaComponent } from './pages/vinacoteca/vinacoteca.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AvisoLegalComponent } from './pages/aviso-legal/aviso-legal.component';
import { PoliticaPrivacidadComponent } from './pages/politica-privacidad/politica-privacidad.component';
import { PoliticaCookiesComponent } from './pages/politica-cookies/politica-cookies.component';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';

const routes: Routes = [
    {
        path: '',
        component: ToolbarComponent,
        children: [
            { path: 'inicio', component: InicioComponent },
            { path: 'menu', component: MenuComponent },
            // { path: 'galeria', component: GaleriaComponent },
            { path: 'vinacoteca', component: VinacotecaComponent },
            { path: 'contacto', component: ContactoComponent },
            { path: 'aviso-legal', component: AvisoLegalComponent },
            { path: 'politica-privacidad', component: PoliticaPrivacidadComponent },
            { path: 'politica-cookies', component: PoliticaCookiesComponent },
            { path: '**', redirectTo: 'inicio' }
            //{ path: 'path/:routeParam', component: MyComponent },
            //{ path: 'staticPath', component: ... },
            //{ path: '**', component: ... },
            //{ path: 'oldPath', redirectTo: '/staticPath' },
            //{ path: ..., component: ..., data: { message: 'Custom' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicRoutingModule {}
