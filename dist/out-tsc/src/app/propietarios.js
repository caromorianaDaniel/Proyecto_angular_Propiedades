export class Propietario {
    constructor(DNI, nombre, apellidos, nacimiento, propiedades) {
        this._DNI = DNI;
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._nacimiento = nacimiento;
        this._propiedades = propiedades;
    }
    get DNI() {
        return this._DNI;
    }
    get nombre() {
        return this._nombre;
    }
    get apellidos() {
        return this._apellidos;
    }
    get nacimiento() {
        return this._nacimiento;
    }
    get propiedades() {
        return this._propiedades;
    }
}
//# sourceMappingURL=propietarios.js.map