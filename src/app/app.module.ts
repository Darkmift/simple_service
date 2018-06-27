import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import { CartComponent } from './components/cart/cart.component';
import { CartSumComponent } from './components/cart-sum/cart-sum.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { QuantitySelectorComponent } from './components/quantity-selector/quantity-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CartSumComponent,
    ProductComponent,
    ProductsComponent,
    QuantitySelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
