import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CrearProptComponent = class CrearProptComponent {
    constructor(propiedadService, propietarioService) {
        this.propiedadService = propiedadService;
        this.propietarioService = propietarioService;
    }
    ngOnInit() {
        this.getCiudades();
    }
    getPropiedades() {
        this.propiedadService
            .getPropiedades()
            .subscribe((propiedades) => (this.propiedades = propiedades));
    }
    getCiudades() {
        this.propiedadService
            .getCiudades()
            .subscribe((ciudades) => (this.ciudades = ciudades));
    }
    save(DNI, nom, ape, nac, idpropd) {
        (DNI = DNI.trim()),
            (nom = nom.trim()),
            (ape = ape.trim()),
            (idpropd = idpropd.trim()),
            (nac = Date.parse(nac));
        if (!DNI || !nom || !ape || !nac || !idpropd) {
            return;
        }
        const Propietario = {
            DNI: DNI,
            nombre: nom,
            apellidos: ape,
            nacimiento: nac,
            propiedades: idpropd,
        };
        this.propietarioService
            .addPropietario(Propietario)
            .subscribe((propietario) => {
            this.propietarios.push(propietario);
        });
    }
};
CrearProptComponent = __decorate([
    Component({
        selector: 'app-crear-propt',
        templateUrl: './crear-propt.component.html',
        styleUrls: ['./crear-propt.component.css'],
    })
], CrearProptComponent);
export { CrearProptComponent };
//# sourceMappingURL=crear-propt.component.js.map