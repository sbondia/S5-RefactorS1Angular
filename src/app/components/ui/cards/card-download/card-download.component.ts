import { Component, Input } from '@angular/core';
import { ButtonLinkComponent } from '../../buttons/button-link/button-link.component';

@Component({
  selector: 'app-card-download',
  imports: [ButtonLinkComponent],
  templateUrl: './card-download.component.html',
  styleUrl: './card-download.component.css'
})
export class CardDownloadComponent {
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
