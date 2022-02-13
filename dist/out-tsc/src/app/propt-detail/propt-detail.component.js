import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let ProptDetailComponent = class ProptDetailComponent {
    constructor(route, propietarioService, location) {
        this.route = route;
        this.propietarioService = propietarioService;
        this.location = location;
    }
    ngOnInit() {
        this.getPropietario();
    }
    getPropietario() {
        const DNI = this.route.snapshot.paramMap.get('_DNI');
        this.propietarioService
            .getPropietario(DNI)
            .subscribe((propietario) => (this.propietario = propietario));
    }
    goBack() {
        this.location.back();
    }
};
__decorate([
    Input()
], ProptDetailComponent.prototype, "propietario", void 0);
ProptDetailComponent = __decorate([
    Component({
        selector: 'app-propietario-detail',
        templateUrl: './propt-detail.component.html',
        styleUrls: ['./propt-detail.component.css'],
    })
], ProptDetailComponent);
export { ProptDetailComponent };
//# sourceMappingURL=propt-detail.component.js.map