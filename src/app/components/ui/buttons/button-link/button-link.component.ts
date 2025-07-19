import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-link',
  imports: [],
  templateUrl: './button-link.component.html',
  styleUrl: './button-link.component.scss'
})
export class ButtonLinkComponent {
  @Input() label:string = ''
  @Input() url?:string = ''
}
