import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-details',
  imports: [],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css'
})
export class CardDetailsComponent {
  @Input() title:string = ''
  @Input() text?:string = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis esse ipsum veritatis ipsa debitis, dolor vel sunt. Doloribus porro sit voluptates, corporis totam molestiae eaque ut. Eaque, corrupti distinctio. Voluptate?'
  @Input() img_src:string = '';

  img_alt: string = '';

  ngOnInit(){
    let aux:string[] = this.img_src.split("/")
    this.img_alt = aux[aux.length-1]
  }
}
