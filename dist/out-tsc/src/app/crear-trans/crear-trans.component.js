import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CrearTransComponent = class CrearTransComponent {
    constructor(propiedadService, propietarioService, transaccionService) {
        this.propiedadService = propiedadService;
        this.propietarioService = propietarioService;
        this.transaccionService = transaccionService;
    }
    ngOnInit() {
        //this.getPropiedades();
        //this.getPropietarios();
        //this.getTransacciones();
        //this.getCiudades();
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
    getPropietarios() {
        this.propietarioService
            .getPropietarios()
            .subscribe((propietarios) => (this.propietarios = propietarios));
    }
    getTransacciones() {
        this.transaccionService
            .getTransacciones()
            .subscribe((transacciones) => (this.transacciones = transacciones));
    }
    save(tipo, DNIc, DNIv, idpropd, plazos) {
        tipo = tipo.trim();
        DNIc = DNIc.trim();
        DNIv = DNIv.trim();
        idpropd = idpropd.trim();
        plazos = Number(plazos);
        let fecha = new Date();
        let precio = 1000;
        let identificador = `V: ${DNIc}, C: ${DNIv}, Prop: ${idpropd}.`;
        if (!tipo || !DNIc || !DNIv || !idpropd || !plazos) {
            return;
        }
        const Transaccion = {
            identificador: identificador,
            tipoTrans: tipo,
            comprador: DNIc,
            vendedor: DNIv,
            fecha: fecha,
            plazos: plazos,
            precio: precio,
        };
        this.transaccionService
            .addTransaccion(Transaccion)
            .subscribe((Transaccion) => {
            this.transacciones.push(Transaccion);
        });
    }
};
CrearTransComponent = __decorate([
    Component({
        selector: 'app-crear-trans',
        templateUrl: './crear-trans.component.html',
        styleUrls: ['./crear-trans.component.css'],
    })
], CrearTransComponent);
export { CrearTransComponent };
//# sourceMappingURL=crear-trans.component.js.map