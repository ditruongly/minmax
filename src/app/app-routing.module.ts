import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { PrivateSiteComponent } from './private-site/private-site.component';
import { PublicSiteComponent } from './public-site/public-site.component';

const routes: Routes = [
  { path: 'public', component: PublicSiteComponent},
  { path: 'private', component: PrivateSiteComponent, canActivate: [AuthGuardGuard]},
  { path: '*', component: PublicSiteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
