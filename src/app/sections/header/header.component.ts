import { Component } from '@angular/core';
import { ButtonNavComponent } from "../../components/ui/buttons/button-nav/button-nav.component";
import { ButtonFormComponent } from "../../components/ui/buttons/button-form/button-form.component";

@Component({
  selector: 'app-header',
  imports: [ButtonNavComponent, ButtonFormComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
