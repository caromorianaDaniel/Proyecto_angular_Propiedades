import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
let PropdSearchComponent = class PropdSearchComponent {
    constructor(propiedadService) {
        this.propiedadService = propiedadService;
        this.searchTerms = new Subject();
    }
    // Push a search term into the observable stream.
    search(term) {
        this.searchTerms.next(term);
    }
    ngOnInit() {
        this.propiedades$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        debounceTime(300), 
        // ignore new term if same as previous term
        distinctUntilChanged(), 
        // switch to new search observable each time the term changes
        switchMap((term) => this.propiedadService.searchPropiedades(term)));
    }
};
PropdSearchComponent = __decorate([
    Component({
        selector: 'app-propd-search',
        templateUrl: './propd-search.component.html',
        styleUrls: ['./propd-search.component.css'],
    })
], PropdSearchComponent);
export { PropdSearchComponent };
//# sourceMappingURL=propd-search.component.js.map