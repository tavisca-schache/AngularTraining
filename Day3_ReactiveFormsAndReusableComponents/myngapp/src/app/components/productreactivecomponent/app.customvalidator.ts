import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Product } from 'src/app/models/app.product';

export class CustomValidator {
    static uniqueProductId(prds: Array<Product>): ValidatorFn {
        return (c: AbstractControl): {[key: string]: any} | null => {
            const val = parseInt(c.value);
            if(prds.find(p => p.ProductId === val) !== undefined){
                return {notunique:true};
            }
            return null;
        }
    }

    static validProductName(c: AbstractControl): {[key: string]: any} | null {
        let val: string = c.value;
        let fChar: string = val.substr(0,1);
        let format: RegExp = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        let hasSpecialChar: boolean = format.test(val);
        let isUppper: boolean = fChar === fChar.toUpperCase();
        if(hasSpecialChar || !isUppper){
            return {notvalidName:true};
        }
        return null;
    }
}