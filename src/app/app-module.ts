import { SharedModule } from './shared/shared-module';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import { RouterModule } from '@angular/router';
import Aura from '@primeuix/themes/aura';
import { AuthntictionModule } from './Modules/authntiction/authntiction-module';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot([]),SharedModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi()),
 provideAnimationsAsync(),
    providePrimeNG({
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: 'none'
      }
    }
  })
  ],
  bootstrap: [App],
})
export class AppModule {}
