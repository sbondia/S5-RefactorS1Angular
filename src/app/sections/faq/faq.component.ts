import { Component } from '@angular/core';
import { CardDetailsComponent } from "../../components/ui/cards/card-details/card-details.component";
import { ButtonLinkComponent } from "../../components/ui/buttons/button-link/button-link.component";

@Component({
  selector: 'app-faq',
  imports: [CardDetailsComponent, ButtonLinkComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  img_src:string = 'icons/icon-arrow.svg'
  cards:any =[
    {
      title: 'What is Bookmark?'
    },
    {
      title: 'How can i request a new browser?'
    },
    {
      title: 'Is there a mobile app?'
    },
    {
      title: 'What about other Chromium browsers?'
    },
  ]
}
