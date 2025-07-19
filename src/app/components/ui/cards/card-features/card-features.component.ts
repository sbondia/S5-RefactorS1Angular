import { Component, Input } from '@angular/core';
import { ButtonLinkComponent } from '../../buttons/button-link/button-link.component';

@Component({
  selector: 'app-card-features',
  imports: [ButtonLinkComponent],
  templateUrl: './card-features.component.html',
  styleUrl: './card-features.component.scss'
})
export class CardFeaturesComponent {
  @Input() title:string = ''
  @Input() text:string = ''
  @Input() btn_label:string = ''
  @Input() btn_url:string = ''
  @Input() img_src:string = '';

  img_alt: string = '';

  ngOnInit(){
    let aux:string[] = this.img_src.split("/")
    this.img_alt = aux[aux.length-1]
  }
}
