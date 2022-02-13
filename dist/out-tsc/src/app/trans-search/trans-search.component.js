import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
let TransSearchComponent = class TransSearchComponent {
    constructor(transaccionService) {
        this.transaccionService = transaccionService;
        this.searchTerms = new Subject();
    }
    // Push a search term into the observable stream.
    search(term) {
        this.searchTerms.next(term);
    }
    ngOnInit() {
        this.transacciones$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        debounceTime(300), 
        // ignore new term if same as previous term
        distinctUntilChanged(), 
        // switch to new search observable each time the term changes
        switchMap((term) => this.transaccionService.searchTransacciones(term)));
    }
};
TransSearchComponent = __decorate([
    Component({
        selector: 'app-trans-search',
        templateUrl: './trans-search.component.html',
        styleUrls: ['./trans-search.component.css'],
    })
], TransSearchComponent);
export { TransSearchComponent };
//# sourceMappingURL=trans-search.component.js.map