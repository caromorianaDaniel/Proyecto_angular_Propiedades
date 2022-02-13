export class Propiedad {
    constructor(identificador, tipo, numero, calles, codpost, metrosc, preciom, propietario) {
        this._identificador = identificador;
        this._tipo = tipo;
        this._numero = numero;
        this._calles = calles;
        this._codpost = codpost;
        this._metrosc = metrosc;
        this._preciom = preciom;
        this._propietario = propietario;
    }
    get identificador() {
        return this._identificador;
    }
    get tipo() {
        return this._tipo;
    }
    get numero() {
        return this._numero;
    }
    get calles() {
        return this._calles;
    }
    get codpost() {
        return this._codpost;
    }
    get metrosc() {
        return this._metrosc;
    }
    get preciom() {
        return this._preciom;
    }
    get propietario() {
        return this._propietario;
    }
    precio() {
        let precio = this._metrosc * this._preciom;
        return precio;
    }
}
//# sourceMappingURL=propiedades.js.map