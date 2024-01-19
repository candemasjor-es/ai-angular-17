import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import * as openai from 'openai';

@Component({
  selector: 'app-pages-imganes',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './pages-imganes.component.html',
  styleUrl: './pages-imganes.component.css'
})

export class PagesImganesComponent {
  private openaiInstance: any;
  contentData: any[] = [];
  editableFiled = new FormControl('');
  response: any;

}
