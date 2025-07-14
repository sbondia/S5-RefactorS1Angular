import { Component, Input } from '@angular/core';
import { ButtonLinkComponent } from "../../components/ui/buttons/button-link/button-link.component";

@Component({
  selector: 'app-product',
  imports: [ButtonLinkComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() title:string = ''
  @Input() text:string = ''
  @Input() buttons:any[] = []
  @Input() img_src:string = '';

  img_alt: string = '';

  ngOnInit(){
    let aux:string[] = this.img_src.split("/")
    this.img_alt = aux[aux.length-1]
  }
}
