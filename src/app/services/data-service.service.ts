import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
	public productsList: Product[] = [
		{
			name: "iPhone",
			price: 10,
			image: "http://pctableti.com/image.php/image.jpg?height=650&image=/Files/Products/660980224apple-iphone-5-white-500x500-500x500.jpg"
		},
		{
			name: "iMac",
			price: 30,
			image: "https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ma/imac/215/imac-215-config-hero-201706?wid=1200&hei=630&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=<1505778247897></1505778247897>"
		},
		{
			name: "iPad",
			price: 20,
			image: "https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/i/pa/ipad/pro/ipad-pro-select-scene2-201706-i1?wid=474&amp;hei=385&amp;fmt=jpeg&amp;qlt=95&amp;op_usm=0.5,0.5&amp;.v=1505500524375"
		},
	];

	public selectedProducts: {quantity: number, productName: string, productPrice: number, productIndex: number}[] = [];
	public cartEmpty: boolean = true;

  constructor() { }


}
