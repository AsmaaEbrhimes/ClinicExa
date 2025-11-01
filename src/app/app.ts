import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('clinicxa');

  // constructor(private translate: TranslateService) {
  //   this.translate.setDefaultLang('en'); // Default language
  //   this.translate.use('en'); // Initial language
  // }

  // switchLanguage(lang: string) {
  //   this.translate.use(lang); // Switch language dynamically
  // }
}
