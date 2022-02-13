import { __decorate } from "tslib";
import { Component } from '@angular/core';
let PropietariosComponent = class PropietariosComponent {
    constructor(propietarioService) {
        this.propietarioService = propietarioService;
    }
    ngOnInit() {
        this.getPropietarios();
    }
    getPropietarios() {
        this.propietarioService
            .getPropietarios()
            .subscribe((propietarios) => (this.propietarios = propietarios));
    }
    add(_DNI) {
        _DNI = _DNI.trim();
        if (!_DNI) {
            return;
        }
        this.propietarioService
            .addPropietario({ _DNI })
            .subscribe((propietario) => {
            this.propietarios.push(propietario);
        });
    }
    delete(propietario) {
        this.propietarios = this.propietarios.filter((h) => h !== propietario);
        this.propietarioService.deletePropietario(propietario).subscribe();
    }
};
PropietariosComponent = __decorate([
    Component({
        selector: 'app-propietarios',
        templateUrl: './propietarios.component.html',
        styleUrls: ['./propietarios.component.css'],
    })
], PropietariosComponent);
export { PropietariosComponent };
//# sourceMappingURL=propietarios.component.js.map