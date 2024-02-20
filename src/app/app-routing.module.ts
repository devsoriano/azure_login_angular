import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicPageComponent } from './public-page/public-page.component';
import { RestrictedPageComponent } from './restricted-page/restricted-page.component';
import { MaslGuard } from './masl.guard';

const routes: Routes = [
  {
    path: 'public-page',
    component: PublicPageComponent,
  },
  {
    path: 'restricted-page',
    component: RestrictedPageComponent,
    canActivate: [MaslGuard], // Proteger la ruta con el guardián
  },
  { path: '**', component: PublicPageComponent }, // Ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
