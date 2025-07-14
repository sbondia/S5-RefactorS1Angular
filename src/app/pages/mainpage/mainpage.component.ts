import { Component } from '@angular/core';
import { ProductComponent } from '../../sections/product/product.component';

@Component({
  selector: 'app-mainpage',
  imports: [ProductComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {

}
