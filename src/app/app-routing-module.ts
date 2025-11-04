import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Modules/layout/layout-module').then((m) => m.LayoutModule),
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./Modules/authntiction/authntiction-module').then((m) => m.AuthntictionModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
