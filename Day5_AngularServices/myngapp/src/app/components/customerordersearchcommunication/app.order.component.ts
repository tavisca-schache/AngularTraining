import { Component, OnInit } from "@angular/core";
import { Order } from 'src/app/models/app.models';
import { Orders } from 'src/app/models/app.constants';
import { CustomerOrderService } from 'src/app/services/app.customerorder.service';

@Component({
    selector: 'app-order-component',
    template:`
    <div class="container">
    <h1>Orders Component</h1>
    <br/>
    <table class="table table-striped table-bordered">
        <thead>
            <tr>
                <th>Order Id</th>
                <th>Order Name</th>
                <th>Date</th>
                <th>Customer Id</th>
                <th>Order Quantity</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let o of filteredOrders">
                <td>{{o.OrderId}}</td>
                <td>{{o.OrderName}}</td>
                <td>{{o.Date}}</td>
                <td>{{o.CustomerId}}</td>
                <td>{{o.OrderQty}}</td>
                <td>{{o.Amount}}</td>
            </tr>
        </tbody>
    </table>
    </div>`
})
export class OrderComponent implements OnInit{
    odr: Order;   
    odrs = Orders;
    customerIds: Array<number>;
    _filteredOrders: Array<Order>;
    
    constructor(private serv: CustomerOrderService){
        this.odr = new Order(0,'',new Date(), 0, 0, 0);
        this.customerIds = [];
        this._filteredOrders = new Array<Order>();
    }

    ngOnInit(): void {
        this.serv.emitValue.subscribe((data)=>{
            this.customerIds = data;
        });
    }

    get filteredOrders(): Array<Order>{
        this._filteredOrders = new Array<Order>();
        if(this.customerIds.length > 0){
            this._filteredOrders = this.odrs.filter((o) => {
                return this.customerIds.includes(o.CustomerId);
            });
        } else {
            this._filteredOrders = this.odrs;
        }
        return this._filteredOrders;
    }
}