import { Propiedad } from './propiedades';
export class Vivienda extends Propiedad {
    constructor(identificador, tipo, numero, calles, codpost, metrosc, preciom, propietario, antiguedad, numHab, numBa, garage, cocina, horno, microondas, lavavajillas, frigorifico) {
        super(identificador, tipo, numero, calles, codpost, metrosc, preciom, propietario);
        this._horno = false;
        this._microondas = false;
        this._lavavajillas = false;
        this._frigorifico = false;
        this._cocina = [
            this._horno,
            this._microondas,
            this._lavavajillas,
            this._frigorifico,
        ];
        this._antiguedad = antiguedad;
        this._numHab = numHab;
        this._numBa = numBa;
        this._garage = garage;
        this._horno = horno;
        this._microondas = microondas;
        this._lavavajillas = lavavajillas;
        this._frigorifico = frigorifico;
        this._cocina = cocina = [horno, microondas, lavavajillas, frigorifico];
    }
    antiguedad() {
        return this._antiguedad;
    }
    numHab() {
        return this._numHab;
    }
    numBa() {
        return this._numBa;
    }
    garage() {
        return this._garage;
    }
    horno() {
        return this._cocina[0];
    }
    microondas() {
        return this._cocina[1];
    }
    lavavajillas() {
        return this._cocina[2];
    }
    frigorifico() {
        return this._cocina[3];
    }
    cocina() {
        return this._cocina;
    }
    precio() {
        let precio = super.precio();
        if (this._antiguedad < new Date(12 / 12 / 1969)) {
            let pantiguedad = super.precio() * 0.5;
            precio = precio - pantiguedad;
        }
        else if (this._antiguedad < new Date(12 / 12 / 1979)) {
            let pantiguedad = super.precio() * 0.3;
            precio = precio - pantiguedad;
        }
        else if (this._antiguedad < new Date(12 / 12 / 1989)) {
            let pantiguedad = super.precio() * 0.2;
            precio = precio - pantiguedad;
        }
        else if (this._antiguedad < new Date(12 / 12 / 1999)) {
            let pantiguedad = super.precio() * 0.05;
            precio = precio - pantiguedad;
        }
        else if (this._antiguedad < new Date(12 / 12 / 2009)) {
            let pantiguedad = super.precio() * 0.1;
            precio = precio + pantiguedad;
        }
        else if (this._antiguedad < new Date(12 / 12 / 2019)) {
            let pantiguedad = super.precio() * 0.3;
            precio = precio + pantiguedad;
        }
        if (this._numHab >= 3) {
            let pnumHab = super.precio() * 0.2;
            precio = precio + pnumHab;
        }
        if (this._numBa >= 2) {
            let pnumBa = super.precio() * 0.3;
            precio = precio + pnumBa;
        }
        if (this._garage == true) {
            let pgarage = super.precio() * 0.15;
            precio = precio + pgarage;
        }
        if (this.cocina[0] == true) {
            let pcocina = super.precio() * 0.02;
            precio = precio + pcocina;
        }
        else if (this.cocina[1] == true) {
            let pcocina = super.precio() * 0.0015;
            precio = precio + pcocina;
        }
        else if (this.cocina[2] == true) {
            let pcocina = super.precio() * 0.02;
            precio = precio + pcocina;
        }
        else if (this.cocina[3] == true) {
            let pcocina = super.precio() * 0.02;
            precio = precio + pcocina;
        }
        return precio;
    }
}
//# sourceMappingURL=viviendas.js.map