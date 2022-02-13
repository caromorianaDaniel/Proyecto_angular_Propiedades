import { Propiedad } from './propiedades';
export class Comercio extends Propiedad {
    constructor(id, numero, calles, codpost, metrosc, preciom, precioBase, propietario, antiguedad, tipo, licencia, caducada, licencias) {
        super(id, numero, calles, codpost, metrosc, preciom, precioBase, propietario);
        this._licencia = '';
        this._caducada = true;
        this._licencias = [
            { licencia: this._licencia, caducada: this._caducada },
        ];
        this._antiguedad = antiguedad;
        this._tipo = tipo;
        this._licencia = licencia;
        this._caducada = caducada;
        this._licencias = licencias = [{ licencia: licencia, caducada: caducada }];
    }
    get antiguedad() {
        return this._antiguedad;
    }
    get tipo() {
        return this._tipo;
    }
    get licencias() {
        return this._licencias;
    }
}
//# sourceMappingURL=comercio.js.map