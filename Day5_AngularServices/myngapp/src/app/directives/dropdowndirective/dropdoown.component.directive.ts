import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-dropdown-directive',
    templateUrl: './dropdown.directive.view.html'
})
export class DropdownDirectiveComponent implements OnInit{
    private _DataSource: Array<any>;

    @Output()
    onSelect: EventEmitter<any>;

    constructor(){
        this._DataSource = new Array<any>();
        this.onSelect = new EventEmitter<any>();
    }

    get DataSource(){
        return this._DataSource;
    }

    @Input()
    set DataSource(d: any){
        this._DataSource = d;
    }

    ngOnInit(): void {}

    onSelectEvent(v: any){
        this.onSelect.emit(v);
    }
}