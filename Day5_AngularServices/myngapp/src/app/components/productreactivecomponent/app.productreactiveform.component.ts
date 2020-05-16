import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/app.product';
import { Logic } from '../../models/app.logic';
import { Categories } from '../../models/app.constants';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { CustomValidator } from './app.customvalidator';

@Component({
  selector: 'app-productreactive-component',
  templateUrl: './productreactiveform.view.html'
})
export class ProductReactiveFormComponent implements OnInit {
    product: Product;
    products: Array<Product>;
    logic: Logic;
    headers: Array<string>;
    categories = Categories;
    searchStr: string = '';
    frmprd: FormGroup;

    constructor(){
        this.logic = new Logic();
        this.product = new Product(0, '', 0, '');
        this.products = this.logic.getProducts();
        this.headers = new Array<string>();
        this.frmprd = new FormGroup({
            ProductId: new FormControl(this.product.ProductId,
                Validators.compose([
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(6),
                    Validators.pattern('[0-9]+'),
                    CustomValidator.uniqueProductId(this.products),
                ])),
            ProductName: new FormControl(this.product.ProductName,
                [CustomValidator.validProductName]),
            Price: new FormControl(this.product.Price),
            Category: new FormControl(this.product.Category),
        });
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
        this.product = this.frmprd.value;
        this.products.push(this.product);
    }

    getSelectedProduct(evt): void {
        this.frmprd.setValue(evt);
    }

    deleteProduct(evt): void {
        let index: number = this.products.findIndex((p, i, a) => p.ProductId === evt.ProductId);
        this.products.splice(index, 1);
    }

    onCatSelect(evt): void {
        this.frmprd.controls.Category.setValue(evt);
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
        this.frmprd.setValue(this.product);
    }
}