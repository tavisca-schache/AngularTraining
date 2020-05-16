import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class CustomerSearchService{
    emitSearchValue: EventEmitter<string>;
    constructor(){
        this.emitSearchValue = new EventEmitter<string>();
    }

    onSearchEmitValue(data: string): void{
        this.emitSearchValue.emit(data);
    }
}