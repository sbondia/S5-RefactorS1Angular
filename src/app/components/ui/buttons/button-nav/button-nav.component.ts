import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-nav',
  imports: [],
  templateUrl: './button-nav.component.html',
  styleUrl: './button-nav.component.css'
})
export class ButtonNavComponent {
  @Input() label:string = ''
  @Input() url:string = ''
}
