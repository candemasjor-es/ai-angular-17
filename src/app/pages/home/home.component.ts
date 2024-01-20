import { Component } from '@angular/core';
import { ThemasService } from '../../services/themas/themas.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  providers: [ ThemasService ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
