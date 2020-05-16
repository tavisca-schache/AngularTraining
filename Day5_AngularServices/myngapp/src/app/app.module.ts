import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/productcomponent/app.product.component';
import { ProductReactiveFormComponent } from './components/productreactivecomponent/app.productreactiveform.component';
import { TableDirectiveComponent } from './directives/tabledirective/table.component.directive';
import { DropdownDirectiveComponent } from './directives/dropdowndirective/dropdoown.component.directive';
import { CustomerComponent } from './components/customerordersearchcommunication/app.customer.component';
import { OrderComponent } from './components/customerordersearchcommunication/app.order.component';
import { SearchComponent } from './components/customerordersearchcommunication/app.search.component';

@NgModule({
  declarations: [
    AppComponent, ProductComponent, ProductReactiveFormComponent, TableDirectiveComponent,
    DropdownDirectiveComponent, CustomerComponent, OrderComponent, SearchComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [SearchComponent, CustomerComponent, OrderComponent]
})
export class AppModule { }
