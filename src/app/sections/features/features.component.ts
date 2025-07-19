import { Component } from '@angular/core';
import { CardFeaturesComponent } from "../../components/ui/cards/card-features/card-features.component";
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-features',
  imports: [CardFeaturesComponent, MatTabsModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  
  btn_label:string = 'More Info'
  cards:any =[
    {
      label: 'Simple Bookmarking',
      title: 'Bookmark in one click',
      text: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
      img_src: 'images/illustration-features-tab-1.svg'
    },
    {
      label: 'Speedy Searching',
      title: 'Intelligent search',
      text: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
      img_src: 'images/illustration-features-tab-2.svg'
    },
    {
      label: 'Easy Sharing',
      title: 'Share your bookmarks',
      text: 'Easily share your bookmarks and collections with others. Create a shareable link that yo can send at the click of a button.',
      img_src: 'images/illustration-features-tab-3.svg'
    }
  ]
  showFeatures(numToShow:number){}
}
