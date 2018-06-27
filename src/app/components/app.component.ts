import { Component } from '@angular/core';
import { Product } from '../models/Product';
import { DataServiceService } from './../services/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private dataService: DataServiceService) {

	}
}
