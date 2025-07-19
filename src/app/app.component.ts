import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { HeaderComponent } from './sections/header/header.component';
import { FooterComponent } from './sections/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainpageComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'S1RefactorAngular';
}
