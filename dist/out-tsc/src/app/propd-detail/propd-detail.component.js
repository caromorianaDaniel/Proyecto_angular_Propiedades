import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let PropdDetailComponent = class PropdDetailComponent {
    constructor(route, propiedadService, location) {
        this.route = route;
        this.propiedadService = propiedadService;
        this.location = location;
    }
    ngOnInit() {
        this.getPropiedad();
    }
    getPropiedad() {
        const calle = this.route.snapshot.paramMap.get('calle');
        const numero = this.route.snapshot.paramMap.get('numero');
        const codpost = Number(this.route.snapshot.paramMap.get('codpost'));
        this.propiedadService
            .getPropiedad(calle, numero, codpost)
            .subscribe((propiedades) => (this.propiedad = propiedades));
        if (this.propiedad._tipo == 'Solar') {
            const Propd = {
                identificador: this.propiedad._identificador,
                tipo: this.propiedad._tipo,
                numero: this.propiedad._numero,
                calles: this.propiedad._calles,
                codpost: this.propiedad._codpost,
                metrosc: this.propiedad._metrosc,
                preciom: this.propiedad._preciom,
                propietario: this.propiedad._propietario,
                edificable: this.propiedad._edificable,
                agua: this.propiedad._agua,
                luz: this.propiedad._luz,
                lejania: this.propiedad._lejania,
            };
        }
    }
    goBack() {
        this.location.back();
    }
    save_sol(edificable, luz, agua) {
        (edificable = Boolean(edificable)),
            (luz = Boolean(luz)),
            (agua = Boolean(agua));
        const Prop = {
            edificable: edificable,
            luz: luz,
            agua: agua,
        };
        this.propiedadService
            .updatePropiedad(Prop)
            .subscribe((propiedad) => (this.propiedad = propiedad));
    }
    save_viv() {
        this.propiedadService
            .updatePropiedad(this.propiedad)
            .subscribe(() => this.goBack());
    }
};
__decorate([
    Input()
], PropdDetailComponent.prototype, "propiedad", void 0);
PropdDetailComponent = __decorate([
    Component({
        selector: 'app-propiedad-detail',
        templateUrl: './propd-detail.component.html',
        styleUrls: ['./propd-detail.component.css'],
    })
], PropdDetailComponent);
export { PropdDetailComponent };
//# sourceMappingURL=propd-detail.component.js.map