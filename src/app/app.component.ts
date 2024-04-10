import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WelcomeScreenComponent, HomeComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio-marcelosjr-v2';

  showWelcomeScreen: boolean = true;
  showContent: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.showContent = true;
      this.showWelcomeScreen = false;
    }, 3000);
  }
}
