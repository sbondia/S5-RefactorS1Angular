import { Component, Input } from '@angular/core';
import { ButtonLinkComponent } from "../../components/ui/buttons/button-link/button-link.component";

@Component({
  selector: 'app-product',
  imports: [ButtonLinkComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  
}
