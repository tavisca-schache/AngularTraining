import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class CustomerOrderService{
    emitValue: EventEmitter<Array<number>>;
    constructor(){
        this.emitValue = new EventEmitter<Array<number>>();
    }

    onEmitValue(data: Array<number>): void{
        this.emitValue.emit(data);
    }
  }