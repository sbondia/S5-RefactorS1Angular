import { Component } from '@angular/core';
import { ProductComponent } from '../../sections/product/product.component';
import { HeaderComponent } from "../../sections/header/header.component";
import { FeaturesComponent } from "../../sections/features/features.component";

@Component({
  selector: 'app-mainpage',
  imports: [ProductComponent, HeaderComponent, FeaturesComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {

}
