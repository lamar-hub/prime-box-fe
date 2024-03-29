import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  {path: 'drive', loadChildren: './drive/drive.module#DriveModule', canLoad: [AuthGuard], canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'auth', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
