import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { PropietariosComponent } from './propietarios/propietarios.component';
import { PropdDetailComponent } from './propd-detail/propd-detail.component';
import { ProptDetailComponent } from './propt-detail/propt-detail.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';
import { TransDetailComponent } from './trans-detail/trans-detail.component';
import { CrearPropiedadesComponent } from './crear-propiedades/crear-propiedades.component';
import { CrearProptComponent } from './crear-propt/crear-propt.component';
import { CrearTransComponent } from './crear-trans/crear-trans.component';
const routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    {
        path: 'propiedades/detail/:calle/:numero/:codpost',
        component: PropdDetailComponent,
    },
    { path: 'propietarios/detail/:_DNI', component: ProptDetailComponent },
    {
        path: 'transacciones/detail/:_identificador',
        component: TransDetailComponent,
    },
    { path: 'propiedades', component: PropiedadesComponent },
    { path: 'propietarios', component: PropietariosComponent },
    { path: 'transacciones', component: TransaccionesComponent },
    { path: 'crearpropiedades', component: CrearPropiedadesComponent },
    { path: 'crearpropietarios', component: CrearProptComponent },
    { path: 'creartransacciones', component: CrearTransComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map