import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-form',
  imports: [],
  templateUrl: './button-form.component.html',
  styleUrl: './button-form.component.scss'
})
export class ButtonFormComponent {
  @Input() label:string = ''
}
