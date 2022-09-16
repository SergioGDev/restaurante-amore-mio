import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { ConfiguracionMenuComponent } from './configuracion-menu/configuracion-menu.component';
import { ConfiguracionInicioComponent } from './configuracion-inicio/configuracion-inicio.component';
import { ConfiguracionVinacotecaComponent } from './configuracion-vinacoteca/configuracion-vinacoteca.component';
import { ConfiguracionGaleriaComponent } from './configuracion-galeria/configuracion-galeria.component';
import { ConfiguracionContactoComponent } from './configuracion-contacto/configuracion-contacto.component';
import { AnnadirSeccionComponent } from './configuracion-menu/annadir-seccion/annadir-seccion.component';

const routes: Routes = [
    {
        path: '',
        component: MenuLateralComponent,
        children: [
            { path: 'configuracion-inicio', component: ConfiguracionInicioComponent },
            { path: 'configuracion-menu', component: ConfiguracionMenuComponent },
            { path: 'configuracion-menu/anadir-seccion', component: AnnadirSeccionComponent },
            { path: 'configuracion-vinacoteca', component: ConfiguracionVinacotecaComponent },
            { path: 'configuracion-galeria', component: ConfiguracionGaleriaComponent },
            { path: 'configuarcion-contacto', component: ConfiguracionContactoComponent },
            { path: '**', redirectTo: 'configuracion-inicio' }
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
export class DashboardRoutingModule {}
