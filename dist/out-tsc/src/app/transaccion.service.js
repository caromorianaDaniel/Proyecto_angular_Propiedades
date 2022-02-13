import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
let TransaccionService = class TransaccionService {
    constructor(http) {
        this.http = http;
        this.transaccionesUrl = 'https://practica-restapi-heroku-dcm.herokuapp.com/transacciones'; // URL to web api
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        };
    }
    /** GET transacciones from the server */
    getTransacciones() {
        const url = `${this.transaccionesUrl}`;
        return this.http
            .get(url)
            .pipe(catchError(this.handleError('getTransacciones', [])));
    }
    /** GET transaccion by _identificador. Return `undefined` when _identificador not found */
    getTransaccionesNo404(_identificador) {
        const url = `${this.transaccionesUrl}/?_identificador=${_identificador}`;
        return this.http.get(url).pipe(map((transacciones) => transacciones[0]), // returns a {0|1} element array
        catchError(this.handleError(`getTransaccion _identificador=${_identificador}`)));
    }
    /** GET transaccion by _identificador. Will 404 if _identificador not found */
    getTransaccion(_identificador) {
        const url = `${this.transaccionesUrl}/buscar/${_identificador}`;
        return this.http
            .get(url)
            .pipe(catchError(this.handleError(`getTransaccion _identificador=${_identificador}`)));
    }
    addTransaccion(transaccion) {
        const url = `${this.transaccionesUrl}/crear`;
        return this.http
            .post(url, transaccion, this.httpOptions)
            .pipe(catchError(this.handleError('addTransaccion')));
    }
    deleteTransaccion(transaccion) {
        const _identificador = typeof transaccion === 'string'
            ? transaccion
            : transaccion._identificador;
        const url = `${this.transaccionesUrl}/${_identificador}`;
        return this.http
            .delete(url, this.httpOptions)
            .pipe(catchError(this.handleError('deleteTransaccion')));
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - _identificador of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    }
};
TransaccionService = __decorate([
    Injectable({ providedIn: 'root' })
], TransaccionService);
export { TransaccionService };
//# sourceMappingURL=transaccion.service.js.map