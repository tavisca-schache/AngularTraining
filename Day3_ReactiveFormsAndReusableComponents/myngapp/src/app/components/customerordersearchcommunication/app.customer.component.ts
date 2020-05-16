import { Component, OnInit } from "@angular/core";
import { Customer } from 'src/app/models/app.models';
import { CustomerOrderService } from 'src/app/services/app.customerorder.service';
import { Customers } from './../../models/app.constants';
import { CustomerSearchService } from 'src/app/services/app.customerSearchservice';

@Component({
    selector: 'app-customer-component',
    template:`
    <div class="container">
    <h1>Customers Component</h1>
    <br/>
    <table class="table table-striped table-bordered">
        <thead>
            <tr>
                <th>Customer Id</th>
                <th>Customer Name</th>
                <th>City</th>
                <th>Email</th>
                <th>Contact Number</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let c of filteredCustomers" (click)="getSelectedCustomer(c)">
                <td>{{c.CustomerId}}</td>
                <td>{{c.CustomerName}}</td>
                <td>{{c.City}}</td>
                <td>{{c.Email}}</td>
                <td>{{c.ContactNumber}}</td>
            </tr>
        </tbody>
    </table>
    </div>`
})
export class CustomerComponent implements OnInit{
    cstm: Customer;
    cstms = Customers;
    searchString: string;
    cstmIds: Array<number>;
    _filteredCustomers: Array<Customer>;

    constructor(private serv: CustomerOrderService, private searchSrv: CustomerSearchService){
        this.cstm = new Customer(0,'','','','');
        this.cstmIds = new Array<number>();
        this._filteredCustomers = new Array<Customer>();
    }

    getSelectedCustomer(c: Customer): void{
        this.cstm = c;
        this.serv.onEmitValue([this.cstm.CustomerId]);
    }

    ngOnInit(){
        this._filteredCustomers = this.cstms;
        this.searchSrv.emitSearchValue.subscribe((data)=>{
            this.searchString = data;
            this.filterCustomers();
            this.serv.onEmitValue(this.cstmIds);
        });
    }

    filterCustomers(): void{
        let ids: Array<number> = new Array<number>();
        this._filteredCustomers = this.cstms.filter((c)=>{
            return c.CustomerName === this.searchString;
        });
        if(this._filteredCustomers.length == 0){
            this._filteredCustomers = this.cstms.filter((c)=>{
                return c.City === this.searchString;
            });
        }
        if(this._filteredCustomers.length == 0){
            this._filteredCustomers = this.cstms;
        } else {
            this._filteredCustomers.forEach((c)=>{
                ids.push(c.CustomerId);
            });
        }
        this.cstmIds = ids;
    }

    get filteredCustomers(): Array<Customer>{
        return this._filteredCustomers;
    }
}