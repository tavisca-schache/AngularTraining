import { Component } from "@angular/core";
import { CustomerSearchService } from 'src/app/services/app.customerSearchservice';

@Component({
    selector: 'app-search-component',
    template:`
    <div class="container">
        <input type="text" [(ngModel)]="searchStr" class="form-control">
        <input type="button" value="Search" (click)="onSearch()">
    </div>`
})
export class SearchComponent{
    searchStr: string;

    constructor(private searchServ: CustomerSearchService){
        this.searchStr = '';
    }

    onSearch(): void{
        this.searchServ.onSearchEmitValue(this.searchStr);
    }
}