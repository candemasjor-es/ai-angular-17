import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ThemasService } from './services/themas/themas.service';
@Component({
  selector: 'app-root',
  standalone: true,
  providers: [ ThemasService ],
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ai-angular-17';
  constructor(private themasservice: ThemasService) {}

  onThemeSwitchChange() {
    this.themasservice.setDarkTheme();
  }

}
