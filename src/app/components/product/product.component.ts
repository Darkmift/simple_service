import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
	public	showQuantity: boolean = false;
  public  editable: boolean = false;

	@Input()
	product: Product;

	@Input()
	index: number;

  
  constructor(private dataService: DataServiceService) { }

  public showQuantityToggle() {
  	this.showQuantity = !this.showQuantity;
  }

  public onSubmit(e, prodName, prodPrice, prodImage):void {
    e.preventDefault();
    this.dataService.productsList[this.index] = {
      name: prodName,
      price: prodPrice,
      image: prodImage
    };
    if (this.dataService.selectedProducts[this.index]) {
      // this.dataService.selectedProducts[this.index] = {
      //       quantity: this.quantity,
      //       productName: prodName,
      //       productPrice: prodPrice,
      //       productIndex: this.index
      //     }
      this.dataService.selectedProducts[this.index].productName = prodName;
      this.dataService.selectedProducts[this.index].productPrice = prodPrice;
    }
  }

  public onEdit():void {
    this.editable = !this.editable;
  }

  public onDelete():void { 
    this.dataService.productsList.splice(this.index, 1);
    console.log(this.dataService.productsList);

  }

}
