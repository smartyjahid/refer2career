import { LogInComponent } from './log-in/log-in.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RouteGuard } from './shared/auth-guard/auth-guard';

const routes: Routes = [
  {
    path: 'login',
    component: LogInComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login/:code/:user',
    component: LogInComponent
  },

  {
    path: 'referer',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    canActivate: [RouteGuard],
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [RouteGuard],
  },
  {
    path: 'recruiter',
    loadChildren: () => import('./employer/employer.module').then(m => m.EmployerModule),
    canActivate: [RouteGuard],
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
