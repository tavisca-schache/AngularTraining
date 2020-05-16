import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-table-directive',
    templateUrl: './table.directive.view.html'
})
export class TableDirectiveComponent implements OnInit {
    private _DataSource: Array<any>;
    headers: Array<string>;

    @Output()
    onRowSelected: EventEmitter<any>;

    @Output()
    onDeleteRecord: EventEmitter<any>;

    constructor(){
        this._DataSource = new Array<any>(),
        this.headers = new Array<string>(),
        this.onRowSelected = new EventEmitter<any>(),
        this.onDeleteRecord = new EventEmitter<any>()
    }

    ngOnInit(): void {}

    get DataSource(): Array<any>{
        return this._DataSource;
    }

    @Input()
    set DataSource(val: Array<any>){
        if(val.length > 0){
            this._DataSource = val;
            for(let p in this._DataSource[0]){
                this.headers.push(p);
            }
        } else{
            this._DataSource = new Array<string>();
        }
    }

    onRowSelectedEvent(r: any){
        this.onRowSelected.emit(r);
    }

    onDeleteRecordEvent(r:any){
        this.onDeleteRecord.emit(r);
    }
}