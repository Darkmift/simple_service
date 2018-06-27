import { Component, Input } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  styleUrls: ['./quantity-selector.component.css']
})
export class QuantitySelectorComponent {
	public quantity: number = 0;

	@Input() index: number;
	@Input() product: Product;

  constructor(private dataService: DataServiceService) {
  	console.log(dataService.productsList);
   }

  public increaseQuantity() {
  	this.quantity = this.quantity + 1;
  	this.updateItem();
  }

  public decreaseQuantity() {
  	if (this.quantity < 1) {
  		return;
  	}
  	this.quantity--;
  	this.updateItem();
  	console.log(this.dataService.selectedProducts);
  }

  public updateItem(): void {
  	if (this.dataService.selectedProducts.length < 1) {
		this.addItem();
		console.log(this.dataService.selectedProducts);
  		return;
  	}
  	for (var i = 0; i < this.dataService.selectedProducts.length; i++) {
  		if (this.index === this.dataService.selectedProducts[i].productIndex) {
  			this.dataService.selectedProducts[i].quantity = this.quantity;
  			return;
  		}
  	}
  	this.addItem();
  	console.log(this.dataService.selectedProducts);
  }

  public addItem(): void {
  	this.dataService.selectedProducts.push({
  		quantity: this.quantity,
  		productName: this.product.name,
  		productPrice: this.product.price,
  		productIndex: this.index
  	})
  }

}
