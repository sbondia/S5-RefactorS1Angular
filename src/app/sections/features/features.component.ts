import { Component } from '@angular/core';
import { CardFeaturesComponent } from "../../components/ui/cards/card-features/card-features.component";

@Component({
  selector: 'app-features',
  imports: [CardFeaturesComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  showFeatures(numToShow:number){}
}
