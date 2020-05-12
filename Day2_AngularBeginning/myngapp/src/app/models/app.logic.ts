import {Products, Categories} from './app.constants';
import {Product} from './app.product';

export class Logic {
    private products: Array<Product>;
    private prds = Products;
    constructor(){
        this.products = new Array<Product>();
        this.prds.forEach((p,i)=> {
            this.products.push(
                new Product(p.ProductId, p.ProductName, p.Price, p.Category)
            );
        });
    }

    getProducts() {
        return this.products;
    }

    saveProduct(prd: Product): Array<Product> {
        this.products.push(prd);
        return this.products;
    }
}