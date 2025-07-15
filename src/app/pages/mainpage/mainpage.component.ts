import { Component } from '@angular/core';
import { ProductComponent } from '../../sections/product/product.component';
import { HeaderComponent } from "../../sections/header/header.component";
import { FeaturesComponent } from "../../sections/features/features.component";
import { DownloadComponent } from "../../sections/download/download.component";
import { FaqComponent } from "../../sections/faq/faq.component";

@Component({
  selector: 'app-mainpage',
  imports: [ProductComponent, HeaderComponent, FeaturesComponent, DownloadComponent, FaqComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {

}
