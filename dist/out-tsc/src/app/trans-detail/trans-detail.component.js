import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let TransDetailComponent = class TransDetailComponent {
    constructor(route, transaccionService, location) {
        this.route = route;
        this.transaccionService = transaccionService;
        this.location = location;
    }
    ngOnInit() {
        this.getTransaccion();
    }
    getTransaccion() {
        const identificador = this.route.snapshot.paramMap.get('_identificador');
        this.transaccionService
            .getTransaccion(identificador)
            .subscribe((transaccion) => (this.transaccion = transaccion));
    }
    goBack() {
        this.location.back();
    }
};
__decorate([
    Input()
], TransDetailComponent.prototype, "transaccion", void 0);
TransDetailComponent = __decorate([
    Component({
        selector: 'app-trans-detail',
        templateUrl: './trans-detail.component.html',
        styleUrls: ['./trans-detail.component.css'],
    })
], TransDetailComponent);
export { TransDetailComponent };
//# sourceMappingURL=trans-detail.component.js.map