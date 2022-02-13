import { __decorate } from "tslib";
import { Component } from '@angular/core';
let PropiedadesComponent = class PropiedadesComponent {
    constructor(propiedadService) {
        this.propiedadService = propiedadService;
    }
    ngOnInit() {
        this.getPropiedades();
    }
    getPropiedades() {
        this.propiedadService
            .getPropiedades()
            .subscribe((propiedades) => (this.propiedades = propiedades));
    }
    delete(calle, numero, codpost) {
        calle = calle.trim();
        numero = numero.trim();
        codpost = Number(codpost);
        this.propiedadService.deletePropiedad(calle, numero, codpost).subscribe();
    }
};
PropiedadesComponent = __decorate([
    Component({
        selector: 'app-propiedades',
        templateUrl: './propiedades.component.html',
        styleUrls: ['./propiedades.component.css'],
    })
], PropiedadesComponent);
export { PropiedadesComponent };
//# sourceMappingURL=propiedades.component.js.map