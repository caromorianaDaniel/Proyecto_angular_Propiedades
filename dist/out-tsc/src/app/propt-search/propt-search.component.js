import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
let ProptSearchComponent = class ProptSearchComponent {
    constructor(propietarioService) {
        this.propietarioService = propietarioService;
        this.searchTerms = new Subject();
    }
    // Push a search term into the observable stream.
    search(term) {
        this.searchTerms.next(term);
    }
    ngOnInit() {
        this.propietarios$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        debounceTime(300), 
        // ignore new term if same as previous term
        distinctUntilChanged(), 
        // switch to new search observable each time the term changes
        switchMap((term) => this.propietarioService.searchPropietarios(term)));
    }
};
ProptSearchComponent = __decorate([
    Component({
        selector: 'app-propt-search',
        templateUrl: './propt-search.component.html',
        styleUrls: ['./propt-search.component.css'],
    })
], ProptSearchComponent);
export { ProptSearchComponent };
//# sourceMappingURL=propt-search.component.js.map