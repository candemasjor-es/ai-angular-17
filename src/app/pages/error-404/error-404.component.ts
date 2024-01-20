import { Component } from '@angular/core';
import { ThemasService } from '../../services/themas/themas.service';

@Component({
  selector: 'app-error-404',
  standalone: true,
  imports: [],
  providers: [ ThemasService ],
  templateUrl: './error-404.component.html',
  styleUrl: './error-404.component.css'
})
export class Error404Component {

}
