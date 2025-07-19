import { Component } from '@angular/core';
import { ProductComponent } from '../../sections/product/product.component';
import { HeaderComponent } from "../../sections/header/header.component";
import { FeaturesComponent } from "../../sections/features/features.component";
import { DownloadComponent } from "../../sections/download/download.component";
import { FaqComponent } from "../../sections/faq/faq.component";
import { ContactComponent } from '../../sections/contact/contact.component';
import { FooterComponent } from "../../sections/footer/footer.component";

@Component({
  selector: 'app-mainpage',
  imports: [ProductComponent, HeaderComponent, FeaturesComponent, DownloadComponent, FaqComponent, ContactComponent, FooterComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent {

}
