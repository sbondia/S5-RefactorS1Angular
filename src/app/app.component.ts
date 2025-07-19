import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainpageComponent } from './pages/mainpage/mainpage.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'S1RefactorAngular';
}
