export class Transaccion {
    constructor(identificador, fecha, plazos, precio, pago, tipoTrans) {
        this._tipoTrans = tipoTrans;
        this._identificador = identificador;
        this._fecha = fecha = new Date();
        this._plazos = plazos;
        this._precio = precio;
        this._pago = pago;
    }
}
//# sourceMappingURL=transacciones.js.map