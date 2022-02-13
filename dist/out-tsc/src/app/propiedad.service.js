import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
let PropiedadService = class PropiedadService {
    constructor(http) {
        this.http = http;
        this.propiedadesUrl = 'https://practica-restapi-heroku-dcm.herokuapp.com/propiedades'; // URL to web api
        this.ciudadesUrl = 'https://practica-restapi-heroku-dcm.herokuapp.com/ciudades'; // URL to web api
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        };
    }
    getPropiedades() {
        const url = `${this.propiedadesUrl}`;
        const propd = this.http
            .get(url)
            .pipe(catchError(this.handleError('getPropiedades', [])));
        return propd;
    }
    getPropiedadNo404(identificador) {
        const url = `${this.propiedadesUrl}/buscar/${identificador}`;
        return this.http.get(url).pipe(map((propiedades) => propiedades[0]), // returns a {0|1} element array
        catchError(this.handleError(`getPropiedad identificador=${identificador}`)));
    }
    getPropiedad(calle, numero, codpost) {
        const url = `${this.propiedadesUrl}/buscar/${calle}/${numero}/${codpost}`;
        return this.http
            .get(url)
            .pipe(catchError(this.handleError(`getPropiedad calle=${calle} numero=${numero} codpost=${codpost}`)));
    }
    addPropiedad(propiedad) {
        const url = `${this.propiedadesUrl}/crear`;
        return this.http
            .post(url, propiedad, this.httpOptions)
            .pipe(catchError(this.handleError('addPropiedad')));
    }
    deletePropiedad(calle, numero, codpost) {
        const url = `${this.propiedadesUrl}/eliminar/${calle}/${numero}/${codpost}`;
        return this.http
            .delete(url, this.httpOptions)
            .pipe(catchError(this.handleError('deletePropiedad')));
    }
    updatePropiedad(propiedad) {
        const url = `${this.propiedadesUrl}/modificar/solar`;
        return this.http
            .put(url, propiedad, this.httpOptions)
            .pipe(catchError(this.handleError('updatePropiedad')));
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
    getCiudades() {
        const url = `${this.ciudadesUrl}`;
        return this.http
            .get(url)
            .pipe(catchError(this.handleError('getCiudades', [])));
    }
};
PropiedadService = __decorate([
    Injectable({ providedIn: 'root' })
], PropiedadService);
export { PropiedadService };
//# sourceMappingURL=propiedad.service.js.map