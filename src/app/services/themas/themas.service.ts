import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemasService {
  private isLightTheme = false;

  getIsLightTheme(): boolean {
    return this.isLightTheme;
  }

  setDarkTheme(): void {
    this.isLightTheme = false;
    document.body.setAttribute('data-bs-theme', 'dark');
  }
}
