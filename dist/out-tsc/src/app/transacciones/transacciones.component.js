import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TransaccionesComponent = class TransaccionesComponent {
    constructor(transaccionService) {
        this.transaccionService = transaccionService;
    }
    ngOnInit() {
        this.getTransacciones();
    }
    getTransacciones() {
        this.transaccionService
            .getTransacciones()
            .subscribe((transacciones) => (this.transacciones = transacciones));
    }
    delete(transaccion) {
        this.transacciones = this.transacciones.filter((h) => h !== transaccion);
        this.transaccionService.deleteTransaccion(transaccion).subscribe();
    }
};
TransaccionesComponent = __decorate([
    Component({
        selector: 'app-transacciones',
        templateUrl: './transacciones.component.html',
        styleUrls: ['./transacciones.component.css'],
    })
], TransaccionesComponent);
export { TransaccionesComponent };
//# sourceMappingURL=transacciones.component.js.map