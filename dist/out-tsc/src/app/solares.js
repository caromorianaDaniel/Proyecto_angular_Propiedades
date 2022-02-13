import { Propiedad } from './propiedades';
export class Solar extends Propiedad {
    constructor(identificador, tipo, numero, calles, codpost, metrosc, preciom, propietario, edificable, agua, luz, lejania) {
        super(identificador, tipo, numero, calles, codpost, metrosc, preciom, propietario);
        this._edificable = edificable;
        this._agua = agua;
        this._luz = luz;
        this._lejania = lejania;
    }
    get edificable() {
        return this._edificable;
    }
    get agua() {
        return this._agua;
    }
    get luz() {
        return this._luz;
    }
    get lejania() {
        return this._lejania;
    }
    precio() {
        let precio = super.precio();
        if (this._edificable == true) {
            let pedificable = super.precio() * 0.3;
            precio = precio + pedificable;
        }
        if (this._agua == true) {
            let pagua = super.precio() * 0.1;
            precio = precio + pagua;
        }
        if (this._luz == true) {
            let pluz = super.precio() * 0.1;
            precio = precio + pluz;
        }
        if (this._lejania < 100) {
            let plejania = super.precio() * 0.5;
            precio = precio + plejania;
        }
        else if (this._lejania < 250) {
            let plejania = super.precio() * 0.4;
            precio = precio + plejania;
        }
        else if (this._lejania < 500) {
            let plejania = super.precio() * 0.3;
            precio = precio + plejania;
        }
        else if (this._lejania < 1000) {
            let plejania = super.precio() * 0.3;
            precio = precio + plejania;
        }
        return precio;
    }
}
//# sourceMappingURL=solares.js.map