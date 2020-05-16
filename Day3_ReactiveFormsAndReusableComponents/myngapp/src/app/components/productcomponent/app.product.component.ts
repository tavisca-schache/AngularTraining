import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/app.product';
import { Logic } from '../../models/app.logic';
import { Categories } from '../../models/app.constants';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.view.html'
})
export class ProductComponent implements OnInit {
    product: Product;
    products: Array<Product>;
    logic: Logic;
    headers: Array<string>;
    categories = Categories;
    searchStr: string = '';

    constructor(){
        this.logic = new Logic();
        this.product = new Product(0, '', 0, '');
        this.products = this.logic.getProducts();
        this.headers = new Array<string>();
    }

    ngOnInit(): void {
        this.products = this.logic.getProducts();
        for(let p in this.product){
            this.headers.push(p);
        }
    }

    clear(): void {
        this.product = new Product(0, '', 0, '');
    }

    saveProduct(): void {
        this.products.push(this.product);
    }

    getSelectedProduct(prd: Product): void {
        this.product = prd;
    }

    deleteProduct(prd: Product): void {
        let index: number = this.products.findIndex((p, i, a) => p.ProductId === prd.ProductId);
        this.products.splice(index, 1);
    }

    sort(): void {
        this.products.sort((m,n)=> {
            if(m.ProductName > n.ProductName){
                return 1;
            }
            if(m.ProductName < n.ProductName){
                return -1;
            }
            return 0;
        });
    }

    reverse(): void {
        this.products.reverse();
    }

    search(str: string): void {
        this.product = this.products.find((p, i) => p.ProductName === str);
    }
}