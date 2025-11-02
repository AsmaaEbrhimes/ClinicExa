// import { SharedModule } from './shared/shared-module';
// import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { AppRoutingModule } from './app-routing-module';
// import { App } from './app';
// import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
// import { providePrimeNG } from 'primeng/config';
// import { RouterModule } from '@angular/router';
// import Aura from '@primeuix/themes/aura';
// import { CoreModule } from './Core/Interceptor/core.module';

// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';



// @NgModule({
//   declarations: [App],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     RouterModule.forRoot([]),
//     SharedModule,
//     CoreModule,

//   ],
//   providers: [
//     provideBrowserGlobalErrorListeners(),
//     provideHttpClient(withInterceptorsFromDi()),
//     provideAnimationsAsync(),
//     providePrimeNG({
//       theme: {
//         preset: Aura,
//         options: {
//           darkModeSelector: 'none',
//         },
//       },
//     }),
//   ],

//   bootstrap: [App],
// })
// export class AppModule {}


















import { SharedModule } from './shared/shared-module';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import { RouterModule } from '@angular/router';
import Aura from '@primeuix/themes/aura';
import { CoreModule } from './Core/Interceptor/core.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';

//===========================Translatetion=======================================//
export class CustomTranslateLoader implements TranslateLoader {
  constructor(
    private http: HttpClient,
    private prefix: string = './assets/i18n/',
    private suffix: string = '.json'
  ) {}

  getTranslation(lang: string): Observable<any> {
    return this.http.get(`${this.prefix}${lang}${this.suffix}`);
  }
}

export function createTranslateLoader(http: HttpClient): TranslateLoader {
  return new CustomTranslateLoader(http, './assets/i18n/', '.json');
}
//===========================Translatetion=======================================//



@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    SharedModule,
    CoreModule,
    TranslateModule.forRoot({
      defaultLanguage: 'ar',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: 'none',
        },
      },
    }),
  ],
  bootstrap: [App],
})
export class AppModule {}
