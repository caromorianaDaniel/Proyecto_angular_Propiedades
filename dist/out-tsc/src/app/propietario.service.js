import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
let PropietarioService = class PropietarioService {
    constructor(http) {
        this.http = http;
        this.propietariosUrl = 'https://practica-restapi-heroku-dcm.herokuapp.com/propietarios'; // URL to web api
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        };
    }
    getPropietarios() {
        const url = `${this.propietariosUrl}`;
        return this.http
            .get(url)
            .pipe(catchError(this.handleError('getPropietarios', [])));
    }
    getPropietariosNo404(_DNI) {
        const url = `${this.propietariosUrl}/?_DNI=${_DNI}`;
        return this.http.get(url).pipe(map((propietarios) => propietarios[0]), // returns a {0|1} element array
        catchError(this.handleError(`getPropietario _DNI=${_DNI}`)));
    }
    getPropietario(_DNI) {
        const url = `${this.propietariosUrl}/buscar/${_DNI}`;
        return this.http
            .get(url)
            .pipe(catchError(this.handleError(`getPropietario _DNI=${_DNI}`)));
    }
    addPropietario(propietario) {
        const url = `${this.propietariosUrl}/crear`;
        return this.http
            .post(url, propietario, this.httpOptions)
            .pipe(catchError(this.handleError('addPropietario')));
    }
    deletePropietario(propietario) {
        const _DNI = typeof propietario === 'string' ? propietario : propietario._DNI;
        const url = `${this.propietariosUrl}/eliminar/${_DNI}`;
        return this.http
            .delete(url, this.httpOptions)
            .pipe(catchError(this.handleError('deletePropietario')));
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - _DNI of the operation that failed
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
PropietarioService = __decorate([
    Injectable({ providedIn: 'root' })
], PropietarioService);
export { PropietarioService };
//# sourceMappingURL=propietario.service.js.map