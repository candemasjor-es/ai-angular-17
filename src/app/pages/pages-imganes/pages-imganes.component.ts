import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pages-imganes',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './pages-imganes.component.html',
  styleUrl: './pages-imganes.component.css',
})
export class PagesImganesComponent {
  private openaiInstance: any;
  contentData: any[] = [];
  editableFiled = new FormControl('');
  response: any;
}
