import { Component } from '@angular/core';
import { ProductComponent } from '../../sections/product/product.component';
import { HeaderComponent } from "../../sections/header/header.component";

@Component({
  selector: 'app-mainpage',
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {

}
